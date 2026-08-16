import { useMemo, useState } from 'react'
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { packages, projects, services, whatsappUrl } from '../../data/siteData'

const packageService = { 'launch-page': 'web-development', 'business-website': 'web-development', 'mvp-app': 'mobile-app-development', 'custom-system': 'business-systems' }

const projectLabel = (slug) => projects.find(project => project.slug === slug)?.title

function initialContext(params) {
  const packageSlug = params.get('package')
  return {
    service: params.get('service') || packageService[packageSlug] || '',
    packageSlug: packageSlug || '',
    projectSlug: params.get('project') || '',
  }
}

export default function ContactForm({ source = 'contact-page' }) {
  const [params] = useSearchParams()
  const context = useMemo(() => initialContext(params), [params])
  const [projectContext, setProjectContext] = useState(context.projectSlug)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (data) => {
    const next = {}
    if (!data.get('name')?.trim()) next.name = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(data.get('email') || '')) next.email = 'Enter a valid work email.'
    if (!data.getAll('services').length) next.services = 'Select at least one service.'
    const summary = data.get('summary')?.trim() || ''
    if (summary.length > 2000) next.summary = 'Please keep the summary under 2,000 characters.'
    return next
  }

  const submit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const nextErrors = validate(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      requestAnimationFrame(() => document.querySelector('.form-errors')?.focus())
      return
    }
    const selectedServices = data.getAll('services').map(slug => services.find(item => item.slug === slug)?.title || slug)
    const packageName = packages.find(item => item.slug === context.packageSlug)?.name
    const projectName = projectLabel(projectContext)
    const message = [
      data.get('projectType') ? `${data.get('projectType')} project for ${data.get('name')}` : `New project inquiry from ${data.get('name')}`,
      `Services: ${selectedServices.join(', ')}`,
      packageName ? `Package: ${packageName}` : '',
      projectName ? `Related project: ${projectName}` : '',
      data.get('summary') ? `Summary: ${data.get('summary')}` : '',
      `Source: ${source}`,
    ].filter(Boolean).join('. ')
    setSubmitted(true)
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }

  if (submitted) return <div className="form-success" role="status"><CheckCircle2 /><h3>Your project brief is ready.</h3><p>WhatsApp opened with an editable message. Send it when you’re happy with the details, and I’ll reply with the most useful next step.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Edit the form</button></div>

  const fieldError = (name) => errors[name] && <span className="field-error" id={`${source}-${name}-error`}>{errors[name]}</span>
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      {Object.keys(errors).length > 0 && <div className="form-errors" role="alert" tabIndex="-1"><strong>Please review {Object.keys(errors).length} field{Object.keys(errors).length > 1 ? 's' : ''}.</strong><span>The highlighted information is needed to prepare your message.</span></div>}
      {(projectContext || context.packageSlug) && <div className="context-row">
        {projectContext && <span className="context-chip">Discussing: {projectLabel(projectContext) || projectContext}<button type="button" onClick={() => setProjectContext('')} aria-label="Remove project context"><X /></button></span>}
        {context.packageSlug && <span className="context-chip">Package: {packages.find(item => item.slug === context.packageSlug)?.name || context.packageSlug}</span>}
      </div>}
      <div className="form-grid">
        <label><span>Full name *</span><input name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? `${source}-name-error` : undefined} placeholder="Your name" />{fieldError('name')}</label>
        <label><span>Work email *</span><input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? `${source}-email-error` : undefined} placeholder="you@company.com" />{fieldError('email')}</label>
        <label><span>Company</span><input name="company" autoComplete="organization" placeholder="Company or brand" /></label>
        <label><span>Project type <small>Optional</small></span><select name="projectType" defaultValue={context.service}><option value="">Not sure yet</option>{services.map(item => <option key={item.slug} value={item.slug}>{item.title}</option>)}</select></label>
        <fieldset className="services-field"><legend>Services *</legend><div>{services.map(item => <label key={item.slug}><input type="checkbox" name="services" value={item.slug} defaultChecked={item.slug === context.service} /><span>{item.title}</span></label>)}</div>{fieldError('services')}</fieldset>
        <label className="summary-field"><span>Project summary <small>Optional · up to 2,000 characters</small></span><textarea name="summary" rows="6" maxLength="2000" aria-invalid={!!errors.summary} placeholder="What are you building, where are you today, and what should success look like?" />{fieldError('summary')}</label>
      </div>
      <button className="button button-primary" type="submit">Prepare WhatsApp inquiry <ArrowUpRight /></button>
      <p className="form-note">Your details stay in this browser until you choose to send the editable WhatsApp message.</p>
    </form>
  )
}

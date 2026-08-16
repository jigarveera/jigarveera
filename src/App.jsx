import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import HomePage from './components/pages/HomePage'
import { ContactPage, ContentPage, LegalPage, ServicePage } from './components/pages/ContentPage'
import WorkPage from './components/work/WorkPage'
import ProjectPage from './components/work/ProjectPage'

export default function App() {
  return <SiteLayout><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/services" element={<ContentPage type="services" />} />
    <Route path="/services/:slug" element={<ServicePage />} />
    <Route path="/work" element={<WorkPage />} />
    <Route path="/work/:slug" element={<ProjectPage />} />
    <Route path="/about" element={<ContentPage type="about" />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/pricing" element={<ContentPage type="pricing" />} />
    <Route path="/industries" element={<ContentPage type="industries" />} />
    <Route path="/privacy" element={<LegalPage type="privacy" />} />
    <Route path="/terms" element={<LegalPage type="terms" />} />
    <Route path="/not-found" element={<ContentPage type="notFound" />} />
    <Route path="*" element={<ContentPage type="notFound" />} />
  </Routes></SiteLayout>
}

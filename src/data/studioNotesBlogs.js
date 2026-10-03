export const studioNotesBlogs = [
  {
    id: 'note-01',
    title: 'Start with the question, not the screen',
    excerpt: 'A practical note on finding a clear purpose before choosing a layout.',
    content: [
      'A blank canvas can make it tempting to start with type, color, or a polished hero. A more useful first move is to ask what the person arriving on the page needs to understand or do.',
      'The project images here show a travel interface at two distances. They make a useful example of how a promise at the top of a page connects to the actual choices further down.',
    ],
    images: [
      { src: '/blog/studio/question-hero.webp', alt: 'Travel website hero from a studio project', credit: 'Jigar Veera' },
      { src: '/blog/studio/question-detail.webp', alt: 'Travel website search and listing interface from a studio project', credit: 'Jigar Veera' },
    ],
    video: null,
    sections: [
      { id: 'the-first-question', type: 'story', eyebrow: '01 / Process', title: 'Name the job of the page', paragraphs: [
        'If the page is meant to help someone discover a trip, the headline should set that direction and the next step should be easy to find. The design work becomes more focused once that job is named.',
        'The same idea applies below the fold. Filters, cards, and labels should help someone compare real options rather than simply fill space.',
      ] },
      { id: 'what-is-next', type: 'question', eyebrow: '02 / A question', title: 'What should someone do next?', answer: 'Choose one primary action for each section. If every item asks for equal attention, the page makes the decision harder than it needs to be.' },
      { id: 'three-checks', type: 'points', eyebrow: '03 / Checklist', title: 'Three checks before polishing', items: ['Can a new visitor say what the page offers?', 'Is the next useful action visible?', 'Does each section help answer a real question?'] },
    ],
    tags: ['Studio notes', 'Design', 'Process'],
  },
  {
    id: 'note-02',
    title: 'Give the important things room to breathe',
    excerpt: 'Why space and hierarchy can make a dense interface feel easier to use.',
    content: [
      'A page can hold a lot without feeling crowded. The trick is to let each part have a clear role: a headline to orient, a visual to set the mood, and a set of choices that people can scan.',
      'These screens from a candle shop project show two moments in that rhythm: an opening scene and a product grid. The same visual language connects them, while spacing gives each one a different pace.',
    ],
    images: [
      { src: '/blog/studio/calm-hero.webp', alt: 'Candle shop hero design from a studio project', credit: 'Jigar Veera' },
      { src: '/blog/studio/calm-detail.webp', alt: 'Candle shop product grid from a studio project', credit: 'Jigar Veera' },
    ],
    video: null,
    sections: [
      { id: 'a-quiet-opening', type: 'story', eyebrow: '01 / Process', title: 'Let the opening set a pace', paragraphs: [
        'The hero has one main message and one main visual. The surrounding dark space helps both feel deliberate. It also gives the next section a clean starting point.',
        'Once the product grid arrives, repetition becomes useful. Consistent card sizes and gaps help the eye move from one option to the next.',
      ] },
      { id: 'why-space', type: 'question', eyebrow: '02 / A question', title: 'Why does empty space help?', answer: 'Space shows what belongs together and what deserves its own moment. It is part of the information structure, not an area waiting to be filled.' },
      { id: 'a-practical-pass', type: 'points', eyebrow: '03 / Checklist', title: 'A practical spacing pass', items: ['Group related details before adjusting gaps', 'Give the primary action a clear place', 'Check that cards still scan at a glance'] },
    ],
    tags: ['Studio notes', 'Interface', 'Hierarchy'],
  },
]

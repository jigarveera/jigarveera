// Ruby's journal lives here. Replace the temporary stock media and sample copy
// with Ruby's own story; add one object with the next day-XX id for each entry.
export const rubyBlogs = [
  {
    id: 'day-01',
    title: "Ruby's first day in the terrarium",
    excerpt: 'A small introduction to a very striking new housemate.',
    content: [
      'Every good story needs a first page. This one belongs to Ruby, a Mexican red knee tarantula with a look that deserves a journal of its own.',
      'The first day is for slowing down, letting a new home feel familiar, and noticing the tiny details. This entry is preview copy until Ruby’s real day-one notes are ready.',
    ],
    images: [
      { src: '/blog/ruby/stock-hero.webp', alt: 'Mexican red knee tarantula on sand, temporary reference photograph', credit: 'George Chernilevsky', source: 'https://commons.wikimedia.org/wiki/File:Brachypelma_smithi_2009_G01.jpg', temporary: true },
      { src: '/blog/ruby/stock-detail.webp', alt: 'Mexican red knee tarantula in a terrarium, temporary reference photograph', credit: 'TimVickers', source: 'https://commons.wikimedia.org/wiki/File:Brachypelma_smithi_5.jpg', temporary: true },
    ],
    video: { url: 'https://www.youtube.com/watch?v=lDYbhteCGjA', title: 'Mexican Red Knee Tarantula short by Tarantula Collective', credit: 'Tarantula Collective', temporary: true },
    sections: [
      { id: 'a-new-chapter', type: 'story', eyebrow: '01 / Field note', title: 'A new chapter begins', paragraphs: [
        'Ruby is the newest member of this little corner of the internet. This journal will become a place for her everyday moments, close-up details, and the slow rhythm of life inside her terrarium.',
        'For now, this is the starting point: an introduction, a space for photos, and the promise of more entries as her story unfolds.',
      ] },
      { id: 'first-impressions', type: 'question', eyebrow: '02 / A closer look', title: 'What makes Ruby so memorable?', answer: 'Those fiery orange-red knees against deep, velvety dark legs are the first thing you notice. The longer you look, the more texture, pattern, and personality you find.' },
      { id: 'journal-plan', type: 'points', eyebrow: '03 / Coming next', title: 'What this journal will hold', items: ['Daily notes from Ruby’s world', 'Two real photos with every entry', 'A short video moment for each day'] },
    ],
    tags: ['Ruby', 'First day', 'Terrarium'],
    isSample: true,
  },
  {
    id: 'day-02',
    title: 'A little world of her own',
    excerpt: 'The second page of Ruby’s journal is about noticing the space around her.',
    content: [
      'A terrarium can look still from the outside. Spend a little longer beside it, and the details begin to ask for attention: a line of shadow, a familiar corner, the quiet space between one movement and the next.',
      'This is a preview chapter for Ruby’s second day. Her actual observations and photos will replace these reference images and notes when they are ready.',
    ],
    images: [
      { src: '/blog/ruby/day-02-hero.webp', alt: 'Mexican red knee tarantula on pale sand; reference photo, not Ruby', credit: 'George Chernilevsky', source: 'https://commons.wikimedia.org/wiki/File:Brachypelma_smithi_2009_G07.jpg', temporary: true },
      { src: '/blog/ruby/day-02-detail.webp', alt: 'Mexican red knee tarantula viewed from above; reference photo, not Ruby', credit: 'George Chernilevsky', source: 'https://commons.wikimedia.org/wiki/File:Brachypelma_smithi_2009_G02.jpg', temporary: true },
    ],
    video: { url: 'https://www.youtube.com/watch?v=xjN_RxA5MWk', title: 'Brachypelma hamorii reference short', credit: 'Podchmielone Ptaszniki', temporary: true },
    sections: [
      { id: 'the-small-scene', type: 'story', eyebrow: '01 / Field note', title: 'The small scene', paragraphs: [
        'The best part of keeping a daily journal is that an ordinary moment gets room to breathe. A photograph can hold the shape of the habitat; a few sentences can hold what caught our eye.',
        'When Ruby’s own day-two story is added, this page will keep those details together instead of letting them disappear into a camera roll.',
      ] },
      { id: 'what-to-notice', type: 'question', eyebrow: '02 / A closer look', title: 'What is worth noticing?', answer: 'The small things: where Ruby chooses to pause, how the light catches her red knees, and what changes in the terrarium from one day to the next. The real answer belongs to Ruby’s future photos and notes.' },
      { id: 'day-two-notes', type: 'points', eyebrow: '03 / Journal prompt', title: 'A place for the real details', items: ['One honest observation from the day', 'Two photos of Ruby from different angles', 'A short video that captures the moment'] },
    ],
    tags: ['Ruby', 'Day two', 'Terrarium'],
    isSample: true,
  },
  {
    id: 'day-03',
    title: 'The color in the quiet',
    excerpt: 'A closer look at the contrast that makes Ruby impossible to miss.',
    content: [
      'Ruby’s name fits the flashes of warm color on a Mexican red knee tarantula. Against a darker body, those bright joints make even a quiet portrait feel vivid.',
      'This day-three entry is a visual preview, with reference media standing in until there are real photographs, a reel, and a story from Ruby’s day.',
    ],
    images: [
      { src: '/blog/ruby/day-03-hero.webp', alt: 'Mexican red knee tarantula standing on sand; reference photo, not Ruby', credit: 'George Chernilevsky', source: 'https://commons.wikimedia.org/wiki/File:Brachypelma_smithi_run_2009_G3.jpg', temporary: true },
      { src: '/blog/ruby/day-03-detail.webp', alt: 'Mexican red knee tarantula in a natural setting; reference photo, not Ruby', credit: 'TimVickers', source: 'https://commons.wikimedia.org/wiki/File:Brachypelma_smithi_6.jpg', temporary: true },
    ],
    video: { url: 'https://www.youtube.com/watch?v=AMCtkiCZoBY', title: 'Brachypelma hamorii reference short', credit: 'The Creep Show Tarantulas', temporary: true },
    sections: [
      { id: 'color-and-contrast', type: 'story', eyebrow: '01 / Field note', title: 'Color and contrast', paragraphs: [
        'The orange-red bands draw the eye first. Then the softer details arrive: texture in the hairs, the outline of each leg, and a shape that changes with the angle of the photograph.',
        'A pair of images makes a good daily record. One frames the whole scene; the next lets a detail become the story.',
      ] },
      { id: 'why-two-frames', type: 'question', eyebrow: '02 / A closer look', title: 'Why keep two frames?', answer: 'A wide view gives the moment a setting. A closer view gives the small details their own space. Together, they make a richer page for Ruby’s journal.' },
      { id: 'day-three-notes', type: 'points', eyebrow: '03 / Journal prompt', title: 'For Ruby’s real day three', items: ['Replace both reference photos with Ruby’s own', 'Add a note about what actually happened', 'Swap the reference short for her reel'] },
    ],
    tags: ['Ruby', 'Day three', 'Close-up'],
    isSample: true,
  },
]

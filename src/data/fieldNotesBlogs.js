export const fieldNotesBlogs = [
  {
    id: 'note-01',
    title: 'The quiet details on the forest floor',
    excerpt: 'A visual note about looking closely at the textures we usually walk past.',
    content: [
      'A forest scene can feel like a single sweep of green and brown. Look closer and it becomes a collection of smaller compositions: fallen wood, rough bark, lichen, and the light finding its way between them.',
      'This note is an invitation to slow the frame down. The images are reference photographs; the thought behind them is simple: the smallest part of a place can be enough to remember it by.',
    ],
    images: [
      { src: '/blog/field/forest.webp', alt: 'Fallen wood and leaves on a forest floor', credit: 'Jmbvt', source: 'https://commons.wikimedia.org/wiki/File:Forest_Floor.JPG' },
      { src: '/blog/field/moss.webp', alt: 'Close view of yellow lichen and tiny textures', credit: 'Rodrigo.Argenton', source: 'https://commons.wikimedia.org/wiki/File:Macro_Moss_(155561995).jpeg' },
    ],
    video: null,
    sections: [
      { id: 'wide-then-close', type: 'story', eyebrow: '01 / The scene', title: 'Begin wide, then move closer', paragraphs: [
        'The first image gives the eye a place to land. Shapes overlap, a path through the frame begins to appear, and the whole scene starts to feel less anonymous.',
        'The second image asks a different kind of attention. Its texture is the subject. Nothing needs to happen for it to be worth a photograph.',
      ] },
      { id: 'what-changes', type: 'question', eyebrow: '02 / A question', title: 'What changes when we look longer?', answer: 'The obvious subject gives way to smaller relationships: color beside color, a hard edge beside a soft one, a patch of light beside shade. The place has not changed; our attention has.' },
      { id: 'a-small-practice', type: 'points', eyebrow: '03 / Try this', title: 'A small practice for the next walk', items: ['Take one photograph that shows the whole scene', 'Take another that shows a detail you almost missed', 'Write one sentence about why that detail stayed with you'] },
    ],
    tags: ['Field notes', 'Nature', 'Observation'],
  },
  {
    id: 'note-02',
    title: 'What rain leaves behind',
    excerpt: 'Two close views of water, light, and the mood after a passing shower.',
    content: [
      'Rain changes a familiar view without moving anything very far. A pane of glass becomes a pattern. A leaf turns into a surface full of tiny reflections.',
      'These two reference photographs offer different distances from the same idea: one looks through the rain, the other looks directly at what it left behind.',
    ],
    images: [
      { src: '/blog/field/rain.webp', alt: 'Raindrops on a window with a soft green background', credit: 'Raysonho', source: 'https://commons.wikimedia.org/wiki/File:RaindropsOnWindow.jpg' },
      { src: '/blog/field/dew.webp', alt: 'Water droplets resting on a leaf', credit: 'Two+two=4', source: 'https://commons.wikimedia.org/wiki/File:Dew_on_leaf_026.jpg' },
    ],
    video: null,
    sections: [
      { id: 'a-soft-filter', type: 'story', eyebrow: '01 / The scene', title: 'A softer way to see', paragraphs: [
        'Through a wet window, the world loses some of its sharp edges. Color remains, but detail recedes. It is a useful reminder that a photograph can hold a feeling as well as a subject.',
        'Move closer to a leaf and the opposite happens. Each droplet has an edge, a reflection, and its own small shape.',
      ] },
      { id: 'where-to-focus', type: 'question', eyebrow: '02 / A question', title: 'Where should the eye settle?', answer: 'On whichever detail makes you pause. It may be a single droplet, the blur behind the glass, or the contrast between the two. There is no single correct frame.' },
      { id: 'after-the-rain', type: 'points', eyebrow: '03 / Try this', title: 'After the next shower', items: ['Look through a window before stepping outside', 'Find one surface that holds the water', 'Keep both frames together as one short story'] },
    ],
    tags: ['Field notes', 'Rain', 'Photography'],
  },
]

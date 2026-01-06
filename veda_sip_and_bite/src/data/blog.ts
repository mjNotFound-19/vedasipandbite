import { BlogPost } from './types';

export const posts: BlogPost[] = [
  {
    slug: 'it-stings-but-it-heals',
    title: 'It Stings, But It Heals',
    author: 'Veda Sip&Bite',
    date: '2025-10-16',
    excerpt: [
      "There's a curious paradox in nature - sometimes, what seems harsh at first touch turns out to be the most healing.",
      'The stinging nettle (Urtica dioica) is one such miracle leaf...'
    ],
    sections: [
      {
        heading: 'From Sting to Strength',
        body: [
          'At Veda Sip & Bite, we celebrate this transformation - from sting to strength, from fear to wellness...',
          'Nettle teaches us that resilience can be gentle and that wellness is often found in the places we least expect.'
        ]
      },
      {
        heading: 'The Ritual of Nettle',
        body: [
          'A warm cup of nettle is a daily reminder to slow down, nourish deeply, and trust the wisdom of nature.',
          'We harvest and dry our leaves with care so every steep offers clarity and calm.'
        ]
      },
      {
        heading: 'Closing Notes',
        body: [
          "That's the power of nettle - and the philosophy behind Veda Sip & Bite.",
          'It stings, but it heals.'
        ]
      }
    ]
  }
];


import { trigger, transition, animate, style, state } from '@angular/animations';

export const InOut = trigger('inOutAnimation', [
  transition(
    ':enter',
    [
      style({ opacity: 0 }),
      animate('150ms ease-out',
        style({ opacity: 1 }))
    ]
  ),
  transition(
    ':leave',
    [
      style({ opacity: 1 }),
      animate('150ms ease-in',
        style({ opacity: 0 }))
    ]
  )
]
);
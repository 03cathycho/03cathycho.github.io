# Andover Music

Browser-based ear training for intervals, scales, chords, and dictation.
Live at https://andovermusic.org.

## What's in it

- Melodic and harmonic interval training
- Scale and modal scale training
- Triad and seventh-chord training, including inversions
- Multi-day practice sets for each exercise type
- Custom exercises

## Running locally

The pages load audio over HTTP, so open them through a local server rather
than directly from disk:

    python3 -m http.server

Then go to http://localhost:8000.

## Built with

Plain HTML, CSS, and JavaScript, hosted on GitHub Pages. Audio uses
[MIDI.js](https://github.com/mudcube/MIDI.js), with jQuery and Bootstrap for
the interface.

## Credits

Created by Cathy Cho '22 for an Independent Project at Phillips Academy
Andover (Spring 2021), advised by Dr. Derek Jacoby.

## License

MIT. See [LICENSE](LICENSE). Third-party libraries and soundfonts included
here keep their own licenses.

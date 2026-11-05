import {test} from 'node:test';
import assert from 'node:assert/strict';
import {applyPreset, stepsFor, cameraPresets} from '../src/core/steps.js';

test('no camera: one step per fragment, plus the bare slide', ()=>{
  assert.deepEqual(stepsFor([], 2), [{cam: 0, frag: 0}, {cam: 0, frag: 1}, {cam: 0, frag: 2}]);
});

test('"full, on": opens on camera, then the slide and its fragments', ()=>{
  assert.deepEqual(stepsFor(cameraPresets('full, on'), 1), [{cam: 0, frag: 0}, {cam: 1, frag: 0}, {cam: 1, frag: 1}]);
});

test('"on, full, on, off": fragments first, the remaining camera layouts at the end', ()=>{
  assert.deepEqual(stepsFor(cameraPresets('on, full, on, off'), 1), [
    {cam: 0, frag: 0}, {cam: 0, frag: 1}, {cam: 1, frag: 1}, {cam: 2, frag: 1}, {cam: 3, frag: 1}
  ]);
});

test('"off, on" (the Disclaimer): content first, camera back on the next press', ()=>{
  assert.deepEqual(stepsFor(cameraPresets('off, on'), 0), [{cam: 0, frag: 0}, {cam: 1, frag: 0}]);
});

test('presets', ()=>{
  assert.deepEqual(applyPreset({}, 'full'), {full: true, behind: false, place: '', off: false, used: true});
  assert.deepEqual(applyPreset({}, 'behind'), {full: true, behind: true, place: '', off: false, used: true});   // the camera under the slides
  assert.equal(applyPreset({}, 'behind right').place, 'right');                                   // the content in the right half
  assert.equal(applyPreset({}, 'behind top-bottom').place, 'top-bottom');
  assert.equal(applyPreset(applyPreset({}, 'behind left-right'), 'behind').place, '');                // plain behind: centred again
  assert.equal(applyPreset(applyPreset({}, 'behind left'), 'on').place, '');
  const carded = applyPreset({size: 24}, 'behind left card 40%');
  assert.equal(carded.card, 40);                                                                   // a card under the words
  assert.equal(carded.size, 24);                                                                   // its number isn't the camera's size
  assert.equal(applyPreset({}, 'behind card').card, 100);                                          // card alone: solid                     // back to its box
  assert.equal(applyPreset(applyPreset({}, 'behind'), 'on').behind, false);                       // back to its box
  assert.equal(applyPreset(applyPreset({}, 'behind'), 'full').behind, false);                     // over the slides
  assert.equal(applyPreset({}, '30%').size, 30);
  assert.equal(applyPreset({}, '90%').size, 60);          // clamped
  assert.equal(applyPreset({}, 'top-left').corner, 'top-left');
  assert.deepEqual(applyPreset({flip: true}, 'flip').flip, false);
  assert.equal(applyPreset({}, 'off').off, true);
});

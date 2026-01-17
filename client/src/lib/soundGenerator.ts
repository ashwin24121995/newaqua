/**
 * Sound Generator Utility
 * Generates game sounds locally using Web Audio API
 * No external API calls - all sounds created procedurally
 */

export class SoundGenerator {
  private audioContext: AudioContext;

  constructor() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }

  /**
   * Play a beep sound for button clicks
   */
  playClick() {
    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    osc.frequency.value = 800;
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  /**
   * Play spinning/rolling sound
   */
  playSpinning() {
    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    // Frequency sweep for spinning effect
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.5);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

    osc.start(now);
    osc.stop(now + 0.5);
  }

  /**
   * Play win sound - cheerful ascending tones
   */
  playWin() {
    const now = this.audioContext.currentTime;
    const notes = [523.25, 659.25, 783.99]; // C, E, G (major chord)

    notes.forEach((freq, index) => {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.frequency.value = freq;
      const startTime = now + index * 0.1;
      gain.gain.setValueAtTime(0.3, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);

      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  }

  /**
   * Play loss sound - descending tones
   */
  playLoss() {
    const now = this.audioContext.currentTime;
    const notes = [523.25, 392, 261.63]; // C, G, C (descending)

    notes.forEach((freq, index) => {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.frequency.value = freq;
      const startTime = now + index * 0.1;
      gain.gain.setValueAtTime(0.3, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);

      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  }

  /**
   * Play jackpot sound - exciting ascending sequence
   */
  playJackpot() {
    const now = this.audioContext.currentTime;
    const notes = [523.25, 587.33, 659.25, 783.99, 1046.5]; // C, D, E, G, C (octave)

    notes.forEach((freq, index) => {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.frequency.value = freq;
      const startTime = now + index * 0.08;
      gain.gain.setValueAtTime(0.3, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.25);

      osc.start(startTime);
      osc.stop(startTime + 0.25);
    });
  }

  /**
   * Play coin collection sound
   */
  playCoins() {
    const now = this.audioContext.currentTime;
    for (let i = 0; i < 3; i++) {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.frequency.value = 800 + i * 200;
      const startTime = now + i * 0.05;
      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.1);

      osc.start(startTime);
      osc.stop(startTime + 0.1);
    }
  }

  /**
   * Play game start sound
   */
  playGameStart() {
    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.3);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  /**
   * Play dice roll sound
   */
  playDiceRoll() {
    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    // Rapid frequency changes for rolling effect
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.3);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.6);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);

    osc.start(now);
    osc.stop(now + 0.6);
  }

  /**
   * Play roulette spin sound
   */
  playRouletteSpinning() {
    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    // Frequency sweep for spinning wheel
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.2);
    osc.frequency.exponentialRampToValueAtTime(300, now + 1);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 1);

    osc.start(now);
    osc.stop(now + 1);
  }

  /**
   * Play ball landing sound
   */
  playBallLanding() {
    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    osc.frequency.value = 600;
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

    osc.start(now);
    osc.stop(now + 0.2);
  }
}

// Create singleton instance
let soundGenerator: SoundGenerator | null = null;

export function getSoundGenerator(): SoundGenerator {
  if (!soundGenerator) {
    soundGenerator = new SoundGenerator();
  }
  return soundGenerator;
}

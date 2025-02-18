# FMOS R2
[[img|modules/images/FMOS_R2.png|100]]

[[[https://www.tangiblewaves.com/store/p97/FMOS.html](https://www.tangiblewaves.com/store/p225/FMOS_R2.html)| View Product Page]]

The FMOS R2 brings FM synthesis to the AE modular. It offers the basic FM synthesis with one oscillator and one modulator, which can be either sine wave or triangle wave independently. The modulation depth and frequency ratio of the modulator can be set with a knob and additionally by CV control. It can also produce a sine wave if needed.

**Note:** This is the new and improved version of the [[fmos.md|FMOS]] module, which has been discontinued for a while.

Module power consumption: 30 mA

## Inputs
* **CV1** - CV control over the pitch of the oscillator.
* **CV2** - CV control added the CV1 to control the pitch.
* **MOD CV** - CV control over the depth of the modulator's depth.

## Outputs
* **OUT** - audio output signal
* **SUB** - suboscillator output / alteratively gate out (for IMDI control)
* **MIX** - mix audio plus suboscillator
* **B.CTRL** - CTRL signal from MIDI bus
* **B.CV** - CV signal from MIDI bus

## Controls
* **FREQ** - Potentiometer for changing the pitch of the oscillator. When CV is sent, then that will be added to this setting.
* **Switch CV** - switch between continous (CONT) and semitone quantized CV control
* **FEEDBCK/FIX FREQ** - Potentiometer for setting modulator feedback (OPM switchn = FDB) or modulator fixed frequency (OPM switch = FIX) 
* * **Switch +2OCT** - When in high position, the pitch will be increased by 2 octaves
* **MULTIPLIER** - Potentiometer to select the FM frequency ratio. Any CV control will be added to this setting.
* **MOD DEPTH** - Potentiometer to select the depth of the modulation. Any CV control will be added to this setting. Turn it all the way to the left (set to 0) for pure basic waveform.
* **Switch OPM** - switch the modulator operator between feedback (FDB) and fixed frequency (FIX)
* **Button MODE/CONFIG** - Selects between 8 different basic waveforms for carrier and modulator; indicated by different LED colors.
  
**LED:**

* **LED red**: Sine wave for carrier and modulator
* **LED green**: triangle wave for carrier and modulator
* **other LED colors**: partially with blinking: different combinations of more complex waveforms; just listen to them!

## Patch Suggestions

FM synthesis lends itself to bell sounds in particular, and brings a whole different colour palette to regular oscillators. Very useful for percussion also.

FMOS lends itself to be used as the main oscillator in a patch. One famous patch where a FM-type of oscillator got used is the Krell patch by Todd Barton on a Buchla.

A version of the patch you can rebuild with the AE Modular is described here:
http://manual-synthesis.info/2017/01/26/krell/#fn:1 

The full details of the patch used with AE Modular are to be found here
https://forum.aemodular.com/post/7208/thread 

Any settings of FMOS can make sense in that context and should be done to your liking.

The sine wave can be really good as a modulation CV, usually attenuated with a [[2cvtool.md|2CVTOOL]] or similar. 

Here is a video by The 5th Volt which features this module.

%embed% https://youtu.be/J5syne2sP6I %%

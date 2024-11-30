# External Gear List

This page is to document other  gear that is compatible with the AE; any gear with a midi out can be used but we are **particularly looking at CV/Gate** issues. If you are using any gear not listed with the AE, please let us know, include anything you need to do to make it work OK if relevant please. 

If you have any hints or tips for other users, please let us know also, 

**Unless otherwise noted, the use of the [[AeManual/4IO| 4I/O module ]] is always recommended.**

The 4I/O's key role is to keep voltages within the 0-5V range so your AE electronics won't be damaged. An AE patchwire is one connection, but you need two to make a circuit; this is the other big thing the 4I/O provides, the 3.5mm lead having 2 connections within it. Within the AE there is a common ground in the bus wire behind the modules.

Another option which can keep other connections to 0-5V is the [[https://www.sound-machines.it/product/ns1nanobridge/| Sound Machine NS1 Nanobridge]], some  AE forum posters have used this successfully. 

A reminder that FX pedals and a lot of other audio can be connected to/from the AE via the [[/modules/stomp-io.md| Stomp IO Module ]]. You can also use mixer module in/outs where they are 3.5mm sockets but watch your levels!

Please note no other modular synthesisers systems are listed, nor Eurorack gear as that is an endless rabbit hole....

# Korg Volca Range

Ideally with the [[/modules/vmbridge.md| VM Bridge module ]], but all Volcas can be used with the AE via the [[/modules/4io.md| 4I/O module ]]. With the latter, it may not function 100% accurately however.

* **Volca Modular** gets a specific mention as the  [[/modules/vmbridge.md| VM bridge module]] was designed with this device in mind.

# Behringer Synthesisers etc.

These can produce voltages higher than 5V, so the 4I/O is vital to protect your AE.  It also means you may not get changes you expect as, for instance, you go from 5V to 6.5V, this will still be 5V for the AE.

* **Neutron** - with a patchbay and a different sound to the AE, a good companion.
* **Pro-1** - some patch points and v/oct connections.
* **Wasp** - some patch points and v/oct connections.
* **Cat** - some patch points and v/oct connections. Audio in.
* **Mono/Poly** -  v/oct connections, and some other patching, can have negative voltage too on some.
* **Model D** - some patch points and v/oct connections.
* **MS101** - Keyboard. v/oct connections
* **Crave** - Patchbay. v/oct connections, possibly even midi/CV convertor. If you have this and the AE, we would like any info, and a video if you can.
* **K2** - Patchbay. Does have negative voltages. Ext in for processing sound.
* **RD-8** - Seperate audio outs that could be processed in AE.
* **TD-3** - CV/Gate out (exceeds 5V). Sync in ([[/modules/vmbridge.md| VM Bridge module ]]). Filter CV in.
* **2600** - Patchbay. Negative voltages and more than +5V.

# Arturia Synthesisers/Drum Machines

These can produce voltages higher than 5V, so the 4I/O is vital to protect your AE.  It also means you may not get changes you expect as, for instance, you go from 5V to 6.5V, this will still be 5V for the AE.

* **Minibrute2** - With a patchbay, sequencer, keyboard and a different sound, a great companion for the AE.
* **Minibrute 2S** - if anyone has used this in conjunction with the AE, we would love a video! (and more info).
* **Drumbrute Impact** - Adjustable clock in/out, and individual outs for the sounds so could be processed in the AE..
* **Matrixbrute** - Most CV outs are 0-10V, oscillator outs are -5 to +5  so could be used via 4I/O module etc. Triggers (gate outs) and sync are 5V so fully compatible.

# Arturia Sequencers etc.

These will produce voltages higher than 5V, so the 4I/O is vital to protect your AE.  It also means you may not get changes you expect as, for instance, you go from 5V to 6.5V, this will still be 5V for the AE. Some of the most popular items to connect to the AE.

* **Beatstep** - A CV/Gate out. Analogue style sequencer and pads.
* **Beatstep Pro** - 2 seperate CV/Gate outs. 8 seperate Trigger outs Analogue style sequencer and pads.
* **Keystep** - A CV/Gate  and modulation out.
* **Keystep 37** - A CV/Gate  and modulation out.
* **Keystep Pro** - 4 seperate CV/Gate outs. 8 seperate Trigger outs. Sequencer and keyboard.
* Some of the **Keylab** controller keyboard range have CV/Gate outs

# [[https://www.rakits.co.uk/| Rakits.co.uk]]

Their range of ready built &/or kit items is fully compatible with the AE, of particular note are the following:-

* [[https://www.rakits.co.uk/product/drum-synth/ | Drum Synth]]
* [[https://www.rakits.co.uk/product/metal/ | Metal Synth ]]
* [[ https://www.rakits.co.uk/product/baby8-sequencer/ | 8 Step Sequencer]]
* [[https://www.rakits.co.uk/product/rakimix-5-channel-mixer/ | 5 Channel Mixer]] - this is expandable.

# Akai MPCs

The CV/Gate outs on the MPC range are 0-5V and so fully compatible with the AE. 

* **Force** - 4 "mono" CV/gate out sockets, can be set to be 4 CVs, 4 Triggers or anything inbetween. 
* **MPC One** - 4 "stereo" CV/gate out sockets, can be set to be 8 CVs, 8 Triggers or anything inbetween.
* **MPC Live II** - 4 "stereo" CV/gate out sockets, can be set to be 8 CVs, 8 Triggers or anything inbetween.
* **MPC X** - 8 CV/gate out sockets, can be set to be 8 CVs, 8 Triggers or anything inbetween.
* **MPC Key 61** - 8 CV/gate out sockets, can be set to be 8 CVs, 8 Triggers or anything inbetween.

For the MPC One and Live II, you will need a stereo 3.5mm jack to 2x3.5mm mono jacks lead for each MPC socket you wish to connect. If using all 8 outs to the AE you will need 2 [[/modules/4io.md| 4I/O modules. ]] Pol on the forum has made a external patchbay for his MPC One to save AE rackspace; details are here; build/use at your own risk!:-

https://wiki.aemodular.com/pmwiki.php/AkaiMPCOne/AEModularPatchbay

# Korg Synthesisers etc.

* **MS20 Mini** - Patchbay. Some CVs exceed 5V but otherwise good.
* **Monologue** - has a sync in/out so could use with [[ AeManual/VMBRIDGE| VM-Bridge module]].
* **Nu:TektNTS1** - has a sync in/out that needs a +5V pulse, so ideal for use with the AE.
* **SQ-1** - 2 seperate CV/Gate outs, sync in/out [[ AeManual/VMBRIDGE| VM-Bridge module]]. Some voltages will exceed 5V.
* **SQ-64** - 4 seperate CV/Gate outs. Will exceed 5V. Pads. Sync in/out [[ AeManual/VMBRIDGE| VM-Bridge module]].  
* **ARP Odyssey** - CV/gate in/out. exceeds 5V

# Make Noise Synthesisers

* **O Coast** - some patch points and v/oct connections. Does exceeds 5V.
* **0-Control** - Pairs well with the Ae via the 4I/O or any CTRL I/O ports **only**; patchable, clock able controller and step sequencer. Tabletop device which will produce greater than 5V (gate/triggers are 8V, 1V/Oct CV standard). Sequence and/or Control the Pitch, Strength, and Time of AE, per step. Pressure and Touch Gate outputs for human generated events and expression. Voltage control over Sequence. Gate output per step for triggering unique events per step.

# Novation

* **Peak** - CV mod in, (can go negative so not fully usable with AE). 2 expression pedal ins. 
* **Summit** - Audio in/sub outs.  CV mod in, (can go negative so not fully usable with AE). 2 expression pedal ins. 
* **Circuit Rhythm** - Sync out ( [[/modules/vmbridge.md| VM bridge module]] ).
* **SL MKII** - 2 seperate, assignable CV/gate outs. Clock Out.  41 or 61 note Keyboard. Sequencer. Good alternative to the Arturia mainstays. If you use this and the AE, any further info or, even better, a video would be appreciated.
* **Circuit Mono Station** Gate (+5V) and CV out (1V/OCt max 7V), Aux CV out (-5V to +5V), with a separate Modulation Sequencer. Programmable Clock in/out (+5V). Audio in for processing Ae with overdrive, resonance, frequency, distortion, LFO and envelope. Modulation matrix which can easily change the AE Pitch with a turn of a knob or LFO after a sequence has been recorded in the Mono Station.

# Moog Synthesisers

These will produce/use voltages higher than 5V, and negative, so the 4I/O is vital to protect your AE.  It also means you may not get changes you expect as, for instance, you go from 5V to 6.5V, this will still be 5V for the AE. Similarly any voltage less than zero will be OV for the AE. Conversely, where the Moog input can go negative (or over 5V), the AE can't so you cannot use all the functionality.

* **Mavis** - Patchbay. Good way to get the moog sound into your AE.
* **Minitaur** - has CV inputs you could provide from the AE.
* **Mother-32** - Patchbay. If you have this & the AE we would like a video/info please!
* **Matriarch**  - has CV inputs you could provide from the AE,  if you have this & the AE we would information please!
* **Subharmonicom** - Patchbay. If you have this & the AE we would like a video/info please!
* **DFAM** - Patchbay, percussion synth. If you have this & the AE we would like a video/info please!

# Cre8 Audio

* **West Pest** - Patchbay, Sequencer and possibly midi/CV convertor. May exceed 5V.
* **East Beast** - Patchbay, Arpegiator/Sequencer and possibly midi/CV convertor. May exceed 5V.

# Erica Synths

* **DB01** - v/oct and a couple CV connections. May exceed 5V.

# Paul White Music 

* **Malevolent** - Patchbay, Keyboard, v/oct connections. Midi/CV convertor. Will exceed 5V. Arpegiator, clock in/out. If you have this and the AE, we would love more info, and a video if possible...

# IK Multimedia 

* **Uno** - v/oct connections. May exceed 5V.

# 1010 Music 

* **Blackbox**. - Clock in/out  which can be connected to the AE, gives the user sampling and a drum machine.
* **Lemondrop** - Clock in which can be connected to the AE. Synth.
* **Fireball** - Clock in which can be connected to the AE. Polysynth.

# Electro-Harmonix

* **8 Step Program** CV Sequencer. If anyone has used this with the AE, info/video would be appreciated.

# Synthstrom

* **Deluge** - 2 Seperate CV outs, can be configured not to exceed 5V. 4  Trig outs which can be set to 5V. Configurable clock in/out. Sequencer. Pads.

# Elektron

These will produce/use voltages higher than 5V, and negative, so the 4I/O is vital to protect your AE.  It also means you may not get changes you expect as, for instance, you go from 5V to 6.5V, this will still be 5V for the AE. Similarly any voltage less than zero will be OV for the AE. For the expression pedal inputs, as the AE does not go negative, you can only use half the available range.

* **Analog Rytm MKII** - Expression pedal inputs, seperate audio in/outs. If you have put this and the AE together can you let us have any information, or even a video please.
* **Analog Four MKII** - CV/Gate track on Sequencer. 4  CV/gate outs. 2 expression pedal inputs partially useable.  If you have put this and the AE together can you let us have any information, or even a video please.
* **Digitone Keys** - 2 "expression" inputs. seperate audio in/outs.
* **Analog Heat MKII** - 2 expression pedal inputs partially useable.  

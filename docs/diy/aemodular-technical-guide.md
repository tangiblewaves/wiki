# AE Modular Technical Guide

[[toc]]

AE Modular is a budget modular format, the lower cost makes it accessible to more users, but without reducing the sound quality, and retaining the flexibility and hands-on nature of more expensive modular formats.

To reduce costs its simplifies the requirements for building modules - using breadboard wires, and simpler potentiometers, and a simple 5V common voltage.

This “simplification”, also means it is easy for users to build their own modules - there are many other DIY platforms that also use 5V including microcontrollers like Arduino / Atmel, ARM, etc.

If you’ve never played with synth DIY its a perfect place to ‘give it a go’, try building a simple oscillator - see how it goes..

__DISCLAIMER:  This document is created in good faith, but I cannot accept any responsibility for damages caused by inaccurate/incorrect information. If you have questions please ask them on the forum or to tangible waves directly.__

## Signals on the Bus Cable

All modules are connected with a 10-pin ribbon cable that runs below the modules. Each module is plugged onto this bus cable with a 10-pin connector.

A master module is usually the source for this ribbon, supplying both power and control signals (derived from midi).

The master module has 2 connectors for 2 separate ribbons. 

[[img|https://www.tangiblewaves.com/uploads/2/6/6/8/26688354/bus-pinout_orig.png|400]]

The top 4 pins are used for power.  The remaining 6 pins are all derived from MIDI by the master module.

[[img|diy/images/pin-explanation.png|700]]

__NOTE: the control signals should be considered as output only, since they are pushed by the master module.__

__NOTE: All modules use the same 5V / Ground rail so modules need to take care not to induce a ripple voltage which can introduce noise.__

## How to make your own ribbon cable

You can of course make your own, it's really nothing special. Here is a general guide on how to make those: https://startingelectronics.org/articles/IDC-ribbon-cable/

## Signal voltage levels

AE Modular works entirely on +5V. For the several signal types this means the following:

* Both CV and Audio are unipolar 5V, and are so interchangeable.
* CV signals are 0..5V
* Pitch is 1V/octave.  According to the calibration page on Tangible Waves:
  * 1V = C1 = MIDI note 24 = 32.703 Hz
    * (C0 vs C1 : different manufactures use different conventions for octave number, the midi spec simply states midi note (e.g 24) and the required frequency)
  * 3V = C3 = MIDI note 48 = 130.81 Hz
* Gate/triggers are 5V
* Audio signals are  0..5V, centre around +2.5V  typically 3Vpp (so 1..4V), though this varies e.g pulse wave from oscillators are full range 5Vpp
* Output impedance is ~1kOhm, so nothing bad happens if an output is connected to ground or two outputs are directly connected (in fact, they will be summed / mixed).

## Physical characteristics

### Ribbon cable

A  standard 10 pin ribbon cable is used, and folded, and has 16 connectors on it.

The Type B cable has a longer distance to connect the master module, since it needs to go to the bottom row, so is an additional 100mm.

### Modules
#### Module Dimensions

Size of the modules (single unit) is 101mm h x 25mm w.  Wider modules are a multiple of 25.4mm (1”) minuses approx. 0.5mm gap tolerance

PCB (single unit) is 100 x 25mm

The standards case allows for a depth of 25mm, plus a 1.5 mm faceplate.

A module is composed of
* The front panel (thickness : 1.5mm)
* Hex spacers M3 8mm high (female-male) between the front panel and PCB
* PCB (thickness: 1.6mm)
* Hex spacers M3 15mm high (female-female)

[[img|diy/images/moduledimensions1.png|600]]
[[img|diy/images/moduledimensions2.png|600]]

The modules are mounted in a case/rack with M3 screws from the bottom (through the bottom plate).

#### PCB - Control Elements and Placement

On the top end of the module, there are two female pin headers (usually 8p.); left the module inputs, right the outputs.

The pin headers are 2,54mm grid (the usual Arduino type headers)

Potentiometers are RK09 type, 20mm high. Typically no additional knobs, only the pot axis.

For connecting to the bus cable, each module has a 2x5 male pin header at the right bottom end of the module

[[img|diy/images/pcbcontrols.png|300]]


#### Front Panels

* **Material**: 1.5mm MDF board, primed and sprayed with color, could be also Acrylic or aluminum...
* **Marking/printing**: is made originally by a rubber stamp and special stamp color; any other options are possible of course.
* **Mounting**: front panels are mounted with M3x4 screws, black, DIN912 cap screw with an inner hex


Ribbon connector example:
https://uk.farnell.com/molex/10-89-7102/header-board-to-board-2row-10way/dp/2293829


Headers example:
https://uk.farnell.com/multicomp/2212s-08sg-85/socket-pcb-1-row-8way/dp/1593463
e(these are a little bit short though)

__NOTE: trimpots are placed on the underside of the module, with holes in the case base to allow for adjustment.__

### Case

The standard case has an internal dimension of 406.4mm  for 16 U.
There are currently two variants: one- or two-row.
The two-row has a ‘wall’ between the top and bottom row, this provided extra stability.
This ‘wall’ has an opening to allow for the lower ribbon cable (type B) to pass from the master module to the lower modules.

To allow for mounting, each row of the case has a series of holes 25.4mm apart for the top and bottom of the module. 
Additionally, at the left-hand side of the case, there are additional holes in the bottom that align with the tuning trimpots of the 2OSC and VCO modules.

Finally, a hole is situated at the top of the left hand ‘end cheek’ of the case to allow for the DC jack of the master module.

__NOTE:  From the ‘holes’ in the case, you can see there is a notional position for the master module and some oscillators modules.__

#### Module Mounting

The modules are standing on metal PCB standoffs , as can be seen here:

[[img|diy/images/modulemounting1.png|400]]
[[img|diy/images/modulemounting2.png|400]]

The module is secured then by screws which goes through the case bottom.
Therefore, it should be noted that some of the ‘stability’, esp for 1U modules, is provided by other modules sitting next to them and the case perimeter. (less so with 2+ Units, since they use 4 posts)

## Connectivity and Power

The master module is an important element in an AEM system, since it interfaces to the outside world, so it is worthy of further discussion.

### Power

The [[modules/master.md|MASTER]] module supplies the regulated 5V from one of 2 sources:
* DC Jack with 9V DC, positive centre, minimum 1 amp.
* Eurorack via the Eurorack connector (+12V, or 5V?)  

The Master module (and the smaller 1U Power module) can supply up to 800mA without any problems. This is more than sufficient for 4 full width rows.

__(check: max current consider, only PSU, or also regulator ?)__

### I/O

* **AUD.1|2** - audio input or output
* **CTRL 1|2**  - cv input or output
* **BUS CV (2)** -  MIDI note on/off pitch (v/oct)
* **BUS GATE** - MIDI on/off 
* **BUS CTRL** - MIDI cc 20 

### Audio Interface

There are two audio I/O 3.5mm sockets.

These are both bi-directional, so can be used either as input or output.

The input and output can be up to 5Vpp, outside this it will be clipped.

__(check: DC coupled?)__
__(check: additional filtering?)__
__(check: Vpp , I thought it's not 5Vpp, but much lower 3Vpp?)__

### CV Interface

There are two CV IO 3.5mm sockets used for Eurorack connectivity.
These are both bi-directional, so can be used either as input or output.
The input and output can be up to 5Vpp, outside this it will be clipped.

The primary difference between this and the audio IO is these are DC coupled.
You can use the CV I/O for audio input too.

__(check: does a bipolar/audio get offset to 2.5V)__

### Midi Interface

Serial MIDI is provided via a 3.5mm jack, with a simple MIDI DIN converter. 
It is input only (unidirectional) and monophonic

The following midi messages are understood:
* Note on/off -> Bus CV & Bus GATE
* MIDI CC 20 -> Bus CTRL 
* MIDI Clock -> Bus CLK
* MIDI Transport start-> Bus START
* MIDI Transport stop-> Bus STOP

All these signals are present on the bus ribbon, even though CV, GATE and CTRL are the only ones present on the master IO header. (CTRL is present on v2+) 

### Racklink module

If you already have a Master module in one AEM rack, and wish to extend to another rack, then you can use the Racklink module as an alternative to a master module in the second rack.

The Racklink connection is actually 2 Racklink modules, and a ribbon cable (20 pins). One racklink modules goes in the ‘master’ rack (the one with the master module) and the other in the slave rack. So this uses 1 U in each rack. Each Racklink is then connected to the bus cable in the rack (so is the source of the bus for the slave rack)

The ribbon cable links the normal ‘bus’ connections, so power + signals, and also 8 additional signals which you can use as you wish (the connection is bi-directional, and can be used for both CV and Audio) 

Additionally, the Racklink module has a dip switch bank to turn off the connection for some or all of the normal bus signals.

This has 2 use cases:
* If you have a master module in both cases, and want to use Racklink to just send the 8 additional signals and ground(!) 
* If you don't have a master module in the slave case, and would like the Racklink to just supply power, ground and the 8 additional signals, this would mean that in the slave rack you could also use the CV bus as you wish (since there is no master sourcing the signals) 


### Notes on connectivity

#### Audio

* Pro audio line level ~ 3.4Vpp 
* Consumer line level ~ 0.9Vpp

#### Eurorack

Whilst Eurorack modules/racks interact very well, the Eurorack standards are fairly ‘loose’ and open to interpretation - so variations exist.  
Doepfer introduced the Eurorack standard, it's the closest there is to a specification, 
See here for their ‘specification’ - http://www.doepfer.de/a100_man/a100t_e.htm

Audio voltages -  up to +/- 10V, but are more commonly +/-5V, this means you will want to attenuate before bring into AEM to avoid clipping/distortion.

CV general  - theoretically +/-10V, which you need to attenuate, however, often its limited to either unipolar 5V (0..5V) or bipolar (-5V to +5V), outside 0..5V, AEM CV inputs will clip.
LFOs vary, some are bipolar, some are unipolar, some switch, often 5V.
Envelopes usually unipolar 5V, but some may have an inverse env, which could be 0..5V or 0..-5V. 
(check: lfo/env ranges)

CV pitch -  1V/octave, but range varies.
Fairly common is  0V..5V, which allows for 5 octaves, others extend to give a greater range e.g. Mutable use -2V to +5V.

CV gate / trig - voltage above +3V are considered high


__(check: Eurorack connector specifics - pinout?)__

#### Ground

When connecting different systems, be it Eurorack or 5V systems, you need to share a common ground to ensure voltages share a common reference. Since the ‘Sleeve’ of a 3.5mm Jack is ground, this can be done by connecting systems with at least one 3.5mm Jack (doesn’t matter if its audio/cv or from master or 4IO all are the same). If you do not want to do this for some reason, you can take the ground from the bus ribbon.
As most uses 3.5mm patch cables to connect AEM to other systems this is normally not an issue, it only becomes relevant if you start patching patch wires directly which only carry signals not ground.


#### Do I need a master module?

Theoretically no, but see the above information for why you might want to use one.

If you can supply a regulated 5V + GND supply, you could connect these directly to modules. If you don’t have a master module connected, you can then freely use the other bus signals for your own use.

For audio output you would need to convert from unipolar 0..5V to bipolar -2.5V to 2.5V.
You could use a 4IO module for this.

__NOTE: if you already have one master module and this is for a new case, an alternative is the Racklink module.__

## Oscillator calibration

As the oscillators are analog they require some time to warm up and to stabilize pitch tracking. They then provide 1V/oct tracking , to facilitate this there is a trimmer pot on the rear (which can be accessed while in the case) to adjust the scaling. 
This procedure is detailed [[https://www.tangiblewaves.com/oscillator-calibration.html | here]]

## Connecting to Other Systems

(with Patch wires)

You can patch directly from other patch wires systems.
* All inputs must be less than 5V.
* A common ground is required.

If the other system has either a CV in/out or Audio in/out, then connecting a 3.5mm patch cable between the two systems will ensure a common ground.


## Considerations for DIY modules

Here are some considerations for creating DIY modules.

### Power

Power is shared across modules, it’s imperative you keep it ‘clean’ and free of ripples otherwise you will induce noise onto other modules. 

Generally it's a good idea to add a 100nF (approx.) capacitor near digital chips from +5V to ground; this has the effect to smooth the power supply from sudden minor changes caused by momentary higher consumption of ICs, microcontrollers. 

Things with heavier voltage swings you may need an inductor, some discussion of this can be found [[http://forum.aemodular.com/thread/20/belamini-module | here]].

(also for microcontrollers with higher current requirements, keep an eye on total used - bare in mind most AE modules are using very little current) 

### Inlets

In AE, digital inputs are pulled to ground by a 100k resistor; this is enough to tell the chip input "low" and high enough to not affect a "real" input signal.


### Module Depth
 
Since the depth is limited to 25mm, it’s quite limited in space.
Remember you will have to have space for the front panel components (that live beneath the faceplace) and also space underneath for the ribbon connector.

### Faceplate 

The easiest thing to use as a starting point is a blank panel, as it gives you the holes for mounting in the correct place.

The headers and drill points for mounting are very close to the edge on the factory modules. 

Getting the faceplate at the same levels is a challenge.
The general idea, as used by tangible waves is a sandwich 

Faceplace ← gap (for components) ←  pcb ← gap (for ribbon header) ← bottom of case.

Of course you can use variations of this, in particular you may find your PCB or faceplate material is thicker. The factory modules, allows for a 2mm thick pcb/ 1.5mm faceplate, but if you use 3mm then you will need to reduce the size to the lower hex spacer (aka standoff).

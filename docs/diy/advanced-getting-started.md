# Getting Starting with Advanced DIY Projects

Probably the best way to get started is to read the [[aemodular-technical-guide.md | AE Modular Technical Guide]] and then try building a 5V circuit on a breadboard.  Once you know it works properly transfer it to a soldered stripboard.

## What you will need for prototyping

* Multimeter (for checking for short circuits) 
* Breadboard
* Power - you could use +5V/GND from AE ribbon, but perhaps easier to use a 5V supply like this  [[https://www.sparkfun.com/products/114 | 5V breadboard supply]] 
* See the [[http://forum.aemodular.com/thread/358/modular-synth-diy-shopping-lists | shopping list over on the Forum]]

Many also like to have a cheap oscilloscope like the 
[[http://forum.aemodular.com/thread/58/highly-recommend-dso138-oscilloscop | DSO138]].

If you have a scope and 5V supply you can test the circuit before plugging into your AEM.

## What to try first?

I’d recommend a simple oscillator, based on the CD40106, there is a [[https://youtu.be/FaoJaLmZaL4 | great youtube video on this]], that’s easy to adapt to AEM.

So build this on a breadboard, most important things to do before powering on is checking for short circuits, using the conductivity test/resistance on your multimeter.

Once your happy its ok, power it up and connect the output to any patch point on the AE.
I’d recommend the mixer module, and turn the volume up SLOWLY, in case its making a horrible screech).

__TIP: if you are using a separate power supply, you will need to have a common ground, so connect ground on the power supply and to the AE modular ribbon.__

Once your prototype is done, you can now make it more permanent.

## Considerations for making DIY modules

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

[[img|diy/images/moduledimensions2.png|800]]

Faceplace ← gap (for components) ←  pcb ← gap (for ribbon header) ← bottom of case.

Of course you can use variations of this, in particular you may find your PCB or faceplate material is thicker.
The factory modules, allows for a 2mm thick pcb/ 1.5mm faceplate, but if you use 3mm then you will need to reduce the size to the lower hex spacer (aka standoff).

## What you will need for building a module

* Simple tools (screwdrivers) 
* Stripboard to relevant size 100mm x (25mm X # HP) 
* Soldering Iron & Solder - nothing special
* Standoffs/hex spacers (see “DIY module considerations”)
* Ribbon connector (see “DIY module considerations”)
* Components (IC, Pots, Switches)
* Drill 

So you now need to transfer the breadboard contents onto a stripboard and solder in some components (hint: lots of video on soldering technical on youtube!) 

I’ve learnt the hard way… planning is the most important/difficult step to this !

First you’ll need the components, including spacers (see “DIY module considerations” for planning this).
You will probably need to cut your stripboard to size.
You should also drill the holes in the PCB for the mounting points

Next you need to decide on the layout of the components such that
They make sense on the front panel
You have enough space to get all the connections

Take your time over this, all I’ve learnt (again the hard way), it’s better to make the module one or two U bigger, than to spend hours struggling to get wires into place due to lack of space (rack space is ‘relatively cheap’ in AEM).

Once you have planned where the components are going to be you need to place them on the PCB, and then mark the front panel for where the holes need to be
(in fact it’s probably best to solder on components, as if things move, they tend to become misaligned).

From there the fun bit, solder all your components on.

Once done, test for short circuits, then give it a go! 

## Further Reading

There is also a very detailed guide over the Forum. Please read through that for more details:
http://forum.aemodular.com/thread/357/beginner-guide-modular-synth-diy

                                                             
# MPC One/AE Modular Patchbay.

[[img|diy/images/patchbay.jpeg|800]]

The MPC One was on my new music gear want list for many reasons, but one of the largest was the 8 CV/Gate outs included. The greatest weaknesses of the AE Modular, for me, is its Midi and lack of ability to play nicely with other gear in my studio. The MPC One can fix this. The fact that the MPC One gate/CV outs are 0-5V is what clinched my purchasing decision, and set me down this road.

I decided very quickly that 2 4 I/O modules wasn’t on, just because of losing AE rack space, but this is the best way to go if you don't want to make your own patchbay. An external 8, 3.5mm socket patchbay that connected to the AE Modular in whatever way I wanted was planned.  The 4I/O module is vital for connections where the voltage may go higher than 5V, or below zero volts (i.e. negative) so do not assume this patchbay will be good for anything else without checking!  You can't use a direct MPC One to AE connection as an AE patch lead is one wire, and you need two wires to make a complete circuit.

[[modules/4io.md| 4 I/O Module]]

The prototype was built in a cheap, plastic box selected for having a stiff enough lid for the jacks to be pulled in/out, and room inside for circuitry, (more anon).  I purchased panel mounting 3.5mm jack sockets, drilled the correct size holes in the lid and then got wiring….

[[img|diy/images/patchbay-1.jpeg|600]]

Having created a suitable CV program in the MPC, a sequence was playing a repeating trigger on output 1. Each of the 4 sockets on the MPC has 2 outs, 1&5, 2&6, 3&7 and 4&8; I purchased 4, 3.5mm stereo to 2 x 3.5mm mono jack leads so each output was now on its own plug.  One lead was plugged into outputs 1&5 socket, and the 2 mono jacks plugged into the patch bay sockets, at this point I did not know which one of the jacks would be output 1; happily the leads I purchased the red mono jack is always the higher number, white the lower.

I had 2 AE patch leads, 1 plugged into the ground socket on the power module, and the other into the trig in of an envelope module - I would know when it triggered from the LED on the module. The Master module also has a ground socket.  By trial and error on the connectors on the back of the socket, I sorted out which 2 made the LED lit up correctly from the pulse from the MPC.  I soldered these first 2 connections, cutting the patch pins off one end of the leads, and attaching to the appropriate pins of the 3.5mm sockets. I also attached a short length of wire to take the ground to the next socket.  I soldered that socket with another patch wire, checked that it worked and so on. Each socket I soldered on a wire to take the ground to the next socket. I originally was going to wire all the grounds to one, but the connectors on the sockets made that impractical. The serial method used has worked fine. By having this common ground, each socket does not need its own connection to the ground on the AE. I checked that CV as well as trigger was working part way through the process, and tested multiple MPC outs at once as well.

[[img|diy/images/patchbay-2.jpeg|600]]

with the finished wiring

[[img|diy/images/patchbay-3.jpeg|600]]

So you end up with 9 patch wires underneath the patchbay, 1 for the ground and 8, one attached to each socket. I used a green, (55cm) one for the ground, and green wire for the ground connections under the patchbay, just so it was easy to keep track. For the other patch wires I used the pink/violet 80cm ones to give the maximum “range” over my AE. I know you can extend with mults etc. but more connections are more risk of disconnection!  In the corner nearest the socket I had soldered the green patch lead onto, I drilled a hole in the box and put the patch wires through it, and put the lid on.  Viola! A working patchbay!

[[img|diy/images/patchbay-4.jpeg|600]]

Two warnings for someone doing this project themselves; most importantly, the common ground is really critical (basically it doesn’t work if not connected, and you could blow a module), I make sure the pin is in the ground socket on the power module before I attempt any triggers etc.  

The second is to drill all the holes in the box before you start fixing any sockets etc. to it. On my 3rd hole I cracked the lid so I had to abandon that particular box. A lesson also learnt was to drill a small, pilot hole first, then use a larger drill to get to the size you want; once I did this I had no further problems.  

The last part was to label each  patch wire/ socket so it is easy to keep track. I have plugged the MPC One's leads in so the MPC CV out 1 is on patch wire one, CV out 2 is on patch wire 2 and so on. Makes it easy to keep track! 

For the future I intend to remount the prototype into a wooden box, but quite like the translucent look so may keep it as it is. From the get go, the plan was to build 2, (hence I had a spare box when I broke the first one drilling). The 2nd box is for my Arturia Beatstep Pro drum trigger outs; that’s the plan anyway, the hiccup is that they output a 12V trigger so the voltage needs to be reduced to go into the AE. I am investigating and the plastic box selected should hold the required circuitry I believe I need, more to follow whenever I have completed phase 2 of this journey….

Any questions or comments can be put in this [[https://forum.aemodular.com/thread/2200/akai-mpc-use-4i-modules| thread]] on the AE Modular forum

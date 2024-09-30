# Project 02 - Frequency Modulation with the CD40106

This project is an extension of [[project01.md | Project 1 - CD40106 Square Wave Oscillator]]. If you haven't done that project, it would probably be a good idea to do that first and leave the circuit assembled on the breadboard.

In this project we will use the following schematics which are shown below next to a photo of the completed circuit:

[[img|diy/images/project2-image1.jpg|270]]
[[img|diy/images/project2-image2.jpg|300]]

First build the circuit in [[AeDiy/Project01 | Project 1]], then we enable frequency modulation (FM) by connecting one of the oscillator-resources of the CD4016 with another one.

To learn more about the concept you may also want to look here:
http://www.fluxmonkey.com/electronoize/40106Oscillator.htm
 
With the circuit of [[project01.md | Project 1]] finished and tested, make the following changes:

* Replace the little ceramic capacitor (104) with a so called electrolytic condensator, (10 μF) as pictured. Make sure to put the marked, negative “leg” to ground.
* Move the ceramic capacitor four columns to the right as pictured above. Make sure to connect the left leg to ground. Caution: This should be done on the lower (black) breadboard, to prevent short-circuiting the 40106!
* Connect column 3 and 6 with a diode, the ring must point to the left, again. The diode will make sure that only the first oscillator interacts with the second one.
* Connect the leftmost pins of the second potentiometer as pictured above.
* Move the output-pin to column 7 as pictured above, it will pick up the signal from the second oscillator now!

Now the first potentiometer will change the pitch of the first oscillator and the second potentiometer changes the pitch of the second oscillator.

Because the first oscillator is changing the frequency of the second oscillator constantly (FM) this can lead to very interesting results.

Please bear in mind, that we have rectangle oscillators here, so if the first oscillator is very slow (potentiometer to the left), you can hear two alternating states of the frequencies for the second oscillator. Whereas when it’s fast the resulting sound will be more like what we are used to from FM-based synths.

Here you may listen to an improvisation done with the circuit along with TOPOGRAF, DRUMKIT, SOLINA, DELAY, SPRING REVERB and MULTIFX (adding just a bit of reverb).

https://soundcloud.com/taitekatto/braedboard-cd40106-fm

'''Have fun!'''


# Step 4 - First Basic Patch

It will be assumed you have one of the starter systems for the purposes of this section.

[[https://www.tangiblewaves.com/uploads/2/6/6/8/26688354/ae_modular_quick_start_guide.pdf | The quick start guide included with these is very helpful, see sections 3 to 7. ]]



Please make sure you have audio connected as per the previous section, and the volume is turned up; you would not be the first synthesist to spend hours looking for a fault and the synth wasn't connected or the amplifier was turned down low.

First connect the output from the oscillator to your audio out - usually A1 on the Master module, and you have Audio I/O 1 going to your external equipment. You should hear noise, if you don't check the settings on the VCO, if still no noise check your connections and try another lead. 

We usually want to make the sound more interesting and vary over time, so put the output of the VCO to the input of a filter, and the output of the filter to the same I/O on the Master module as before.  This is where the real fun starts! Fiddle with the filter frequency and resonance. If you have a filter module with more than one type of filter, try the different types to hear what they do, some modules will mean moving the patch wires to try the different sorts.

Unless you want a drone, we usually want a sound to start and stop, this is done with the VCA module. Patch the filter out to the input of a VCA, patch a bus gate output (on the Master module and several others but not the VCA module!) to the CV in of the same VCA (the VCA module on the AE has 2 separate VCAs in it). The VCA out goes to the I/O as before. What should happen now is you only hear the sound when you press a key on the attached Midi keyboard.

The sound starts and stops abruptly, this can be really useful but usually we want the sound to fade in and out slower, this is done with an Envelope module. Move the Bus Gate lead to the input of an Envelope (there are various types but the current AE modular has 2 envelope generators in one module), and patch the output to the CV in of the VCA. You can check this works by pressing the trigger button on the envelope module, or pressing a key on the keyboard as before, play with the attack and decay knobs to see their effect. The fast/slow switch changes how quickly the envelope will work.

We now want the filter to change as we hold the note, so use the other envelope in the 2ENV module to control that - Bus Gate to its input, and the output to the filter CV in. You will find plugging a lead in here will change the sound as the CV from the lead combines with the frequency set by the front panel knob position. On the Nyle Filter module you can also CV control resonance which can be brilliant.

We are now ready to play a tune with our great sound, so patch a Bus CV out to the CV in on the oscillator you are using. You will need to adjust the front panel knobs (of the VCO) to the range you want, but you should find the pitch of the sound now changes with the key you play on the attached keyboard.

We would like vibrato (pitch wobble); connect the output of an LFO to the other CV in on the VCO you are using - it will go fairly mental! We need to give the VCO just a little bit of the signal from the LFO, so we need an attentuator. Connect the output of the LFO to the IN 1 socket of the 2 ATT/CV module, now connect output 1 to the CV input of the VCO. The level of the modulation is now set by the level 1 knob on the 2ATT/CV module. 

You can do a lot just with minor adjustments to the patch you have now created, and you've barely started using all the modules; you can just plug the patch wires in and try things, you can't break the AE modular this way. Enjoy your exploration and journey. 

%embed% https://youtu.be/Z1zWIMh0a_s %%


[[getting-started.md | <-- Back to Getting Started]] || [[getting-started-5.md | Step 5 - Record your Performance -->]]
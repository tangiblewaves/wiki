(:mini 150x200 :)

(:table border=0 width=100% :)
(:cell width=80% :) 
!! µ4BUFFER
[[https://www.tangiblewaves.com/store/p175/u4BUFFER.html  | View Product Page]]

This 1/3 height micro module provides a buffered 4 channel multiple. This can be used for multiplying cv, trigger and gate signals without voltage loss. One input signal will be routed to two duplicate outputs.

This module needs to be installed on the [[AeManual/uBASE | µBASE]] module!

Module power consumption: ? mA

!!! Inputs

* '''IN 1, 2, 3, 4''' - Inputs for each of the 4 buffer channels

!!! Outputs

* '''OUT 1, 2, 3, 4''' - Two outputs for each of the 4 channels.

!!! Patch Suggestions

While this module seems to provide similar functionality as the [[AeManual/4BUFFER]] module, it is missing the linking feature. So if you want to multiply one input signal to many outputs, then you need to patch it internally, eg.:

* Patch an input signal to IN1
* Patch OUT1a to IN2
* Patch OUT1b to IN3

Now you have 4 outgoing copies of the incoming signal from OUT2 and OUT3.


(:cell:) Mini:u4BUFFER.png
(:tableend:)

[[AeManual/Modules | <-- Back to the Module Index]]

This manual is a community work in progress. If you would like to help out with completing this manual please send a PM to @admin at the [[http://forum.aemodular.com | AE Modular Forum]].  The status of each page can be seen on the Trello board at [[https://trello.com/b/HNd0dBt7/ae-manuals]]
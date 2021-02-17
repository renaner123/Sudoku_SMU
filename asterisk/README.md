### Instalação e compilação do Asterisk foi conforme tutorial do site:
> https://linuxize.com/post/how-to-install-asterisk-on-ubuntu-18-04/

Foi usado a configuração genérica basic-pbx

* sudo make basic-pbx
* sudo make config

### A parte de certificados e configuração Webrtc foi conforme:

> https://wiki.asterisk.org/wiki/display/AST/Configuring+Asterisk+for+WebRTC+Clients


## Arquivos principais

## - http.conf

[general]
enabled=yes <br>
bindaddr=0.0.0.0< br>
bindport=8088 <br>
tlsenable=yes <br>
tlsbindaddr=0.0.0.0:8089<br>
tlscertfile=/etc/asterisk/keys/asterisk.pem<br>
tlsprivatekey=/etc/asterisk/keys/asterisk.key<br>
tlscafile=/etc/asterisk/keys/ca.crt<br>
tlscapath=/etc/asterisk/keys<br>

## -pjsip.conf

[general]<br>
transport=ws, wss <br>
nat=force_rport,comedia <br>
directmedia=no<br>
icesupport=no<br>

[sip-softphone](!)<br>
host=dynamic<br>
type=friend<br>
context=from-internal<br>

[webrtc](!)<br>
host=dynamic<br>
type=endpoint<br>
auth_type=userpass<br>
context=from-internal<br>
webrtc=yes<br>
aors=webrtc_client<br>
auth=webrtc_client<br>
avpf=yes<br>
dtlsenable=yes<br>
dtlsverify=no<br>
dtlscertfile=/etc/asterisk/keys/asterisk.pem<br>
dtlscafile=/etc/asterisk/keys/ca.crt<br>
dtlssetup=actpass

[8000](sip-softphone)<br>
username=8000<br>
secret=8000<br>

[8001](webrtc)<br>
username=8001<br>
password=8001<br>

[8002](sip-softphone)<br>
username=8002<br>
secret=8002<br>

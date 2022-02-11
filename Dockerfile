FROM kalilinux/kali-rolling
RUN apt update 
RUN apt upgrade -y 
RUN apt install git -y 
RUN apt-get install curl -y 
RUN apt install -y ffmpeg opus-tools bpm-tools 
RUN curl -sL https://deb.nodesource.com/setup_17.x | bash -
RUN apt install nodejs -y
RUN git clone https://github.com/gascomit/qtell.git
RUN cd Qtell
WORKDIR /Qtell
RUN npm install --force
RUN touch ~/.hushlogin
CMD node Qtell.js

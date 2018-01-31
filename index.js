class Participant {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    sendMessage(message, to) {
        this.chatroom.sendMessage(message, to, this);
    }

    receiveMessage(from) {
        this.chatroom.showMessages(from, this);
    }
}

class ChatRoom {
    constructor() {
        const participants = {};
        const messageLog = {
            public: [],
            direct: []
        };
        this.addParticipant = function (participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        }
        this.sendMessage = function (message, to, { name }) {
            if (!to) {
                messageLog.public.push({
                    from: name,
                    message: message
                })
            } else {
                messageLog.direct.push({
                    from: name,
                    to: to.name,
                    message: message
                })
            }


        }

        this.showMessages = function (from, participant) {
            if (!from) {
                return messageLog.public;
            } else {
                return messageLog.direct.filter(messages => messages.from === from.name && messages.to === participant.name);
            }
        }


    }





}

// const chatroom = new ChatRoom();

// const ivan = new Participant('Ivan');
// const kolia = new Participant('Kolia');
// const serg = new Participant('Serg');


// chatroom.addParticipant(ivan);
// chatroom.addParticipant(kolia);
// chatroom.addParticipant(serg);

// ivan.sendMessage('hi All')
// ivan.sendMessage('hi', kolia)
// ivan.sendMessage('hi', serg)

// kolia.receiveMessage()
// kolia.receiveMessage(ivan)

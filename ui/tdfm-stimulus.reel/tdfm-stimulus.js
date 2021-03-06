/**
 * @module ui/tdfm-stimulus.reel
 * @requires core/contextualizable-component
 */
var AbstractStimulus = require("oprime-montage/core/abstract-stimulus").AbstractStimulus;

/**
 * @class TdfmStimulus
 * @extends AbstractStimulus
 */
exports.TdfmStimulus = AbstractStimulus.specialize( /** @lends TdfmStimulus# */ {
    constructor: {
        value: function TdfmStimulus() {
            this.super();
        }
    },
    load: {
        value: function(stimulus) {

            var imagePath = this.imageAssetsPath || "missingpath";
            imagePath += "/";
            var audioPath = this.audioAssetsPath || "missingpath";
            audioPath += "/";

            if (stimulus.prime.imageFile.indexOf("../assets") > -1) {
                imagePath = "";
            }
            stimulus.audioFile = audioPath + stimulus.prime.carrierAudioFile;
            stimulus.prime.imageFile = imagePath + stimulus.prime.imageFile;
            stimulus.responses = [];

            this.super(stimulus);
            this.playAudio();
            this.score = 0;
        }
    },

    handleSubjectAction: {
        value: function() {
            console.log(" Button Subject is pressed ");
            this.target["subject-clitic"].score = 1;
            this.score++;
            this.target.score = this.score / 3;
            this.addOralResponse(this.target, "not_done_yet");
        }
    },

    handleAuxiliaryAction: {
        value: function() {
            console.log(" Button Auxiliary is pressed ");
            this.target["auxiliary"].score = 1;
            this.score++;
            this.target.score = this.score / 3;
            this.addOralResponse(this.target, "not_done_yet");
        }
    },

    handleVerbAction: {
        value: function() {
            console.log(" Button Verb is pressed ");
            this.target["verb-form"].score = 1;
            this.score++;
            this.target.score = this.score / 3;
            this.addOralResponse(this.target, "not_done_yet");
        }
    },

    handleObjectAction: {
        value: function() {
            console.log(" Button Object is pressed ");
            this.target["object-phrase"].score = 1;
            // this.score++; //object is not obligatory?
            this.target.score = this.score / 3;
            this.addOralResponse(this.target, "not_done_yet");
        }
    },

    handleCorrectAction: {
        value: function() {
            console.log(" Button Correct is pressed ");
            this.target.score = 1;
            this.addOralResponse(this.target);
        }
    },

    handleIncorrectAction: {
        value: function() {
            console.log(" Button Incorrect is pressed ");
            this.target.score = 0;
            this.addOralResponse(this.target);
        }
    }

});

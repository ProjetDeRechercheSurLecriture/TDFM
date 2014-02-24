/**
 * @module ui/tdfm.reel
 * @requires oprime-montage/ui/experiment
 */
var Experiment = require("oprime-montage/ui/experiment.reel").Experiment,
    designToForceIncludeInMop = require("assets/stimuli/tdfm_design.json");
// sampleResultToForceIncludeInMop = requi re("assets/stimuli/tdfm_sample_result.json");

var enLocales = require("assets/stimuli/locale/en/messages.json");
var frLocales = require("assets/stimuli/locale/fr/messages.json");
var iuLocales = require("assets/stimuli/locale/iu/messages.json");


/**
 * @class TDFM
 * @extends Experiment
 */
var TDFM = exports.TDFM = Experiment.specialize( /** @lends TDFM# */ {
    constructor: {
        value: function TDFM() {
            // console.log(designToForceIncludeInMop);
            this.experimentalDesignSrc = "assets/stimuli/tdfm_design.json";
            this.super();
            this.loadDesign(designToForceIncludeInMop);

            this.contextualizer.addMessagesToContextualizedStrings(enLocales, "en");
            this.contextualizer.addMessagesToContextualizedStrings(frLocales, "fr");
            this.contextualizer.addMessagesToContextualizedStrings(iuLocales, "iu");

            this.application.currentStimuliDialect = {
                "iso": "fr",
                "name": "French",
                "nativeName": "français"
            };
            this.contextualizer.currentLocale = this.application.currentStimuliDialect.iso;
        }
    },

    experimentType: {
        value: "tdfm"
    },

    handleStartExperimentPress: {
        value: function() {
            console.log("start button action ");
        }
    },

    transform: {
        value: function() {

            for (var subexperimentIndex = 0; subexperimentIndex < x.subexperiments.length; subexperimentIndex++) {
                var subexperiment = x.subexperiments[subexperimentIndex];
                subexperiment.scoreSubTotal = 0;
                for (var stimulusIndex = 0; stimulusIndex < subexperiment.trials.length; stimulusIndex++) {
                    var stimulus = subexperiment.trials[stimulusIndex];
                    console.log(stimulus);
                    stimulus.prime = {
                        "carrierPhrase": stimulus.auditoryStimulus,
                        "imageFile": stimulus.primeImage,
                        "carrierAudioFile": stimulus.audioFile
                    };
                    delete stimulus.auditoryStimulus;
                    delete stimulus.primeImage;
                    delete stimulus.audioFile;

                    stimulus.target = {
                        "subject-clitic": {
                            "phonemic": "æl",
                            "orthographic": "Elle (al)"
                        },
                        "auxiliary": {
                            "phonemic": "ɑ",
                            "orthographic": "a"
                        },
                        "verb-form": {
                            "phonemic": "ekʁi",
                            "orthographic": "écrit"
                        },
                        "object-phrase": {
                            "phonemic": stimulus.audioTarget,
                            "orthographic": stimulus.audioTarget
                        }
                    };
                    delete stimulus.audioTarget;


                }
            }
            x.subexperiments[1].trials[6]
        }
    }
});

exports.Tdfm = TDFM;

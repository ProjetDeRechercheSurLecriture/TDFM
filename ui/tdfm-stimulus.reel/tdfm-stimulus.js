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

      stimulus.audioFile = audioPath + stimulus.audioFile;
      stimulus.primeImage = imagePath + stimulus.primeImage;

      this.super(stimulus);
    }
  }
});

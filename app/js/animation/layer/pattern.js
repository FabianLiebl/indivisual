/**
 *
 * @returns {number}
 */
HC.Layer.prototype.patternCenterX = function () {
    return this.width/2 + this.width * this.settings.pattern_centerx;
};

/**
 *
 * @returns {number}
 */
HC.Layer.prototype.patternCenterY = function () {
    return this.height/2 + this.height * this.settings.pattern_centery;
};

/**
 *
 * @returns {number}
 */
HC.Layer.prototype.patternCenterZ = function () {
    return this.cameraDefaultDistance() * this.settings.pattern_centerz;
};

/**
 *
 * @param invertY
 * @returns {Vector3}
 */
HC.Layer.prototype.patternCenterVector = function (invertY) {
    return new THREE.Vector3(this.patternCenterX(), this.patternCenterY()*(invertY?-1:1), this.patternCenterZ());
};

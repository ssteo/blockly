/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Utility methods for size calculation.
 * These methods are not specific to Blockly, and could be factored out into
 * a JavaScript framework such as Closure.
 * @author samelh@google.com (Sam El-Husseini)
 */
'use strict';

/**
 * @name Size
 * @namespace
 */
goog.module('Blockly.utils.Size');
goog.module.declareLegacyNamespace();


/**
 * Class for representing sizes consisting of a width and height.
 * @param {number} width Width.
 * @param {number} height Height.
 * @struct
 * @constructor
 */
const Size = function(width, height) {
  /**
   * Width
   * @type {number}
   */
  this.width = width;

  /**
   * Height
   * @type {number}
   */
  this.height = height;
};

/**
 * Compares sizes for equality.
 * @param {?Size} a A Size.
 * @param {?Size} b A Size.
 * @return {boolean} True iff the sizes have equal widths and equal
 *     heights, or if both are null.
 */
Size.equals = function(a, b) {
  if (a == b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.width == b.width && a.height == b.height;
};

exports = Size;

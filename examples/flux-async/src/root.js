/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

'use strict';

import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';

import TodoLoggerStore from './stores/TodoLoggerStore';

ReactDOM.render(<AppContainer />, document.getElementById('todoapp'));

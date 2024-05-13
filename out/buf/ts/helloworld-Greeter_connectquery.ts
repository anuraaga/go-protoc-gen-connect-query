// Copyright 2015 gRPC authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-connect-query v1.4.0 with parameter "target=ts"
// @generated from file helloworld.proto (package helloworld, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { HelloReply, HelloRequest } from "./helloworld_pb.js";

/**
 * Sends a greeting
 *
 * @generated from rpc helloworld.Greeter.SayHello
 */
export const sayHello = {
  localName: "sayHello",
  name: "SayHello",
  kind: MethodKind.Unary,
  I: HelloRequest,
  O: HelloReply,
  service: {
    typeName: "helloworld.Greeter"
  }
} as const;

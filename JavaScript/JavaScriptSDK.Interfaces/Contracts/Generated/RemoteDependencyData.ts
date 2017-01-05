// THIS TYPE WAS AUTOGENERATED
/// <reference path="Domain.ts" />
/// <reference path="DataPointType.ts" />
/// <reference path="DependencyKind.ts" />
/// <reference path="DependencySourceType.ts" />
module AI
{
"use strict";
    export class RemoteDependencyData extends Microsoft.Telemetry.Domain
    {
        public ver: number;
        public name: string;
        public id: string;
        public resultCode: string;
        public duration: string;
        public success: boolean;
        public data: string;
        public target: string;
        public type: string;
        public properties: any;
        public measurements: any;

        /* Following fields should be marked as deprecated in the next release, and must be removed in the subsequent breaking release */
        public kind: AI.DataPointType;
        public value: number;
        public count: number;
        public min: number;
        public max: number;
        public stdDev: number;
        public dependencyKind: AI.DependencyKind;
        public async: boolean;
        public dependencySource: AI.DependencySourceType;
        public commandName: string;
        public dependencyTypeName: string;

        constructor()
        {
            super();

            this.ver = 2;
            this.kind = AI.DataPointType.Aggregation;
            this.dependencyKind = AI.DependencyKind.Other;
            this.success = true;
            this.dependencySource = AI.DependencySourceType.Apmc;
            this.properties = {};
            this.measurements = {};
            
            super();
        }
    }
}

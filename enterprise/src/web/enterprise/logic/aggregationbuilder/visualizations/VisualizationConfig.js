// @flow

export default class VisualizationConfig {
  static fromJSON(type: string, value: any): VisualizationConfig {
    const implementingClass = VisualizationConfig.__registrations[type.toLocaleLowerCase()];

    if (implementingClass) {
      return implementingClass.fromJSON(type, value);
    }

    throw new Error(`Unable to find visualization config of type: ${type} - missing plugin?`);
  }
  static __registrations: { [string]: typeof VisualizationConfig } = {};

  static registerSubtype(type: string, implementingClass: typeof VisualizationConfig) {
    this.__registrations[type.toLocaleLowerCase()] = implementingClass;
  }
}

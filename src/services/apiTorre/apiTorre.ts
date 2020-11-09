// this is who do connection with api torre

import axios, { AxiosRequestConfig } from "axios";

export class apiTorre {
  public static config(params = {}) {
    const configuration: any = {
      method: "get",
      url: "https://torre.bio/api/bios/",
      params,
    };
    return configuration;
  }
  /**
   * method that return the data of person
   */
  public static async getPerson(userName): Promise<any> {
    const configuration: any = this.config({});
    configuration.url = configuration.url + userName;
    const { data: person } = await axios(configuration);

    const person_details = { professionalHeadline: String };
    person_details.professionalHeadline = person;

    return person_details.professionalHeadline = person;

  };

}
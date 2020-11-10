// this is who do connection with api torre

import axios, { AxiosRequestConfig } from "axios";
import { strict } from "assert";

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
    const { data: person, data: strengths , data: education} = await axios(configuration);


    let infoStrengths = strengths.strengths.map(element => element.name);
    let infoEducation = education.education.map(element => element.name);

    

    const person_details = {
      professionalHeadline: String,
      picture: String,
      name: String,
      location: String,
      summaryOfBio: String,
      strengths: String,
      education: String
    };

    person_details.professionalHeadline = person.person.professionalHeadline;
    person_details.picture = person.person.picture;
    person_details.name = person.person.name;
    person_details.location = person.person.location.name;
    person_details.summaryOfBio = person.person.summaryOfBio;
    person_details.strengths = infoStrengths;
    person_details.education = infoEducation;

    return person_details;
  };

    /**
   * method that return the data of ofert job
   */

  public static async getOferJob(id_job): Promise<any> {
    const configuration: any = this.config({});
    configuration.url = "https://torre.co/api/opportunities/" + id_job;
    const { data } = await axios(configuration);

    const strengths = data.strengths.map(elemnt => elemnt.name);

    const job_details = {
      strengths: String,
      opportunity: String,
      objective: String,
      minAmount: Number,
      maxAmount: Number
    };
    job_details.strengths = strengths;
    job_details.opportunity = data.opportunity;
    job_details.objective = data.objective;
    job_details.minAmount = data.compensation.minAmount;
    job_details.maxAmount = data.compensation.maxAmount;

    return job_details;
  }
}
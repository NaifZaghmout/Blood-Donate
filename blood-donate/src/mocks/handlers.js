import { http, HttpResponse } from "msw";

const baseURL = "http://122.160.74.251:8021/";

export const handlers = [
  http.get(
    `${baseURL}api/listpatients/`,
    ({ request, params, cookies }) => {
      return HttpResponse.json([
        {
          id: 10,
          patient_blood_type: "AB+",
          patient_email: "bandari@yopmail.com",
          patient_health_information: "redness",
          patient_name: "bandari",
          patient_phone_number: "7788994455",
        },
      ]);
    }
  ),
];

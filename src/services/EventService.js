// import axios from "axios";

// const apiClient = axios.create({
//   baseURL: "https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",
//   withCredentials: false,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   }
// });

// export default {
//   getEvents(perPage:number, page:number) {
//     return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
//   },
//   getEvent(id:number) {
//     return apiClient.get(`/events/${id}`);
//   }
// };

const fakeData = {
  status: "SUCCESS",
  data: [
    {
      id: 123,
      title: "Covid-19: Continue using AstraZeneca vaccine, says WHO",
      body: "The World Health Organization (WHO) has urged countries not to pause Covid vaccinations, as several major EU member states halted their rollouts of the Oxford-AstraZeneca jab. It said there was no evidence of a link between the vaccine and blood clots. Germany, France, Italy and Spain joined smaller nations in halting vaccinations as a precaution while checks are made. The WHO's vaccine safety experts are meeting on Tuesday to discuss the jab. The European Medicines Agency (EMA) will meet on the same day and is due to draw conclusions on Thursday. It has also said the vaccine should continue to be used. There have been a number of cases in Europe of blood clots developing after the vaccine was administered. However, experts say these were no more than the number of blood-clot incidents typically reported within the general population. About 17 million people in the EU and the UK have received a dose of the vaccine, with fewer than 40 cases of blood clots reported as of last week, AstraZeneca said.",
    },
    {
      id: 124,
      title: "Birds are not real",
      body: "A secret internal government report was release today...",
    },
    {
      id: 125,
      title: "Man wears hat",
      body: "A man wore a hat today",
    },
    {
      id: 125,
      title: "COVID Cured",
      body: "Today coronavirus was cured...",
    },
  ]
}


export default {
  getNewsList() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(fakeData);
      }, 200)
    });
  },
  getNewsArticle(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(fakeData.data.find(item => item.id == id));
      }, 200)
    })
  }
};
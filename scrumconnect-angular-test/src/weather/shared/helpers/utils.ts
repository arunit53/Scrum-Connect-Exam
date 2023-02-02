export const updateObject = (oldObject: any, anotherObject: any) => {
    return {
        ...oldObject,
        ...anotherObject
    };
};

export const getCityWeatherForecast = (serviceResponse) => {

    let tempList = [];
    const filteredList = [];
    let sixAM = '';
    let sixPM = '';
    let twelveAM = '';
    let twelvePM = '';

    const response = serviceResponse;
    const cityName = response.city.name;
    const cityId = response.city.id;
    tempList =  response.list;
    const todayDate = new Date().toISOString().slice(0, 10);
    const tomorrow  = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toISOString().slice(0, 10);
    tempList.filter(eachItem => {
        const hrTime = eachItem.dt_txt.slice(11, 13);
        if ((eachItem.dt_txt.slice(0, 10) === todayDate && hrTime !== '00') ||
            (eachItem.dt_txt.slice(0, 10) === tomorrowDate)) {
            filteredList.push(eachItem);
        }
    });

    filteredList.forEach(eachItem => {
        const hrTime = eachItem.dt_txt.slice(11, 13);
        if (hrTime === '00') {
            twelveAM = eachItem.main.temp + ' °C';
        } else if (hrTime === '06') {
            sixAM = eachItem.main.temp + ' °C';
        } else if (hrTime === '12') {
            twelvePM = eachItem.main.temp + ' °C';
        } else if (hrTime === '18') {
            sixPM = eachItem.main.temp + ' °C';
        }
    });
    return {
        id: cityId,
        city: cityName,
        sixAM : sixAM !== '' ? sixAM : 'No data',
        sixPM: sixPM !== '' ? sixPM : 'No data',
        twelveAM: twelveAM !== '' ? twelveAM : 'No data' ,
        twelvePM: twelvePM !== '' ? twelvePM : 'No data',
    };
};

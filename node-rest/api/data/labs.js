const Status = {
    IN_PROGRESS: 1,
    FAILED: 2,
    SUCCESS: 3
  };
  
labs = [
    {
        id: "1",
        name: "Adi",
        status: Status.IN_PROGRESS,
        progress_percentile: 90
    },
    {
        id: "2",
        name: "Roy",
        status: Status.FAILED,
        progress_percentile: 20.5
    }, 
    {
        id: "3",
        name: "Hen",
        status: Status.IN_PROGRESS,
        progress_percentile: 10.5
    },
    {
        id: "4",
        name: "Dan",
        status: Status.SUCCESS,
        progress_percentile: 100
    },
    {
        id: "5",
        name: "Dvir",
        status: Status.IN_PROGRESS,
        progress_percentile: 50
    },
    {
        id: "6",
        name: "Amit",
        status: Status.FAILED,
        progress_percentile: 90
    },
    {
        id: "7",
        name: "Ariel",
        status: Status.SUCCESS,
        progress_percentile: 100
    },
    {
        id: "8",
        name: "Yoni",
        status: Status.FAILED,
        progress_percentile: 85
    },
    {
        id: "9",
        name: "Ofir",
        status: Status.SUCCESS,
        progress_percentile: 100
    },
    {
        id: "10",
        name: "yael",
        status: Status.SUCCESS,
        progress_percentile: 100
    }
];

module.exports.labs = labs;

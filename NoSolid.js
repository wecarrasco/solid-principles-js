class DataProcessor {
  processData(data) {
    var FormatedData = this.formatData(data);
    this.printData(FormatedData);
  }

  formatData(data) {
    console.log('Formatting data...');
    return (
      '******************************' +
      '\n' +
      data +
      '\n' +
      '******************************'
    );
  }

  printData(data) {
    console.log('Printing data...');
    console.log(data);
  }
}

var p = new DataProcessor();
p.processData('SOLID Principles!!!');

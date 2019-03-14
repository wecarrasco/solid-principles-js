// Principle #1: Single responsibility principle
// A class should have one and only one reason to change,
// meaning that a class should only have one job.

class DataFormatter {
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
}

class DataPrinter {
  printData(data) {
    console.log('Printing Data...');
    console.log(data);
  }
}

class DataProcessor {
  processData(data) {
    var formatter = new DataFormatter();
    var formattedData = formatter.formatData(data);
    var printer = new DataPrinter();
    printer.printData(formattedData);
  }
}

var p = new DataProcessor();
p.processData('SOLID Principles!!!');

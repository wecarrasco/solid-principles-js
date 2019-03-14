// Principle #2: Open Closed Principle
// Objects or entities should be open for extension, but closed for modification.

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

class UpperCaseDataFormatter extends DataFormatter {
  formatData(data) {
    const formattedData = super.formatData(data);
    return formattedData.toUpperCase();
  }
}

class LowerCaseDataFormatter extends DataFormatter {
  formatData(data) {
    const formattedData = super.formatData(data);
    return formattedData.toLowerCase();
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
    const formatter = new DataFormatter();
    const formattedData = formatter.formatData(data);
    const printer = new DataPrinter();
    printer.printData(formattedData);

    const upperCaseFormatter = new UpperCaseDataFormatter();
    const formattedDataUpper = upperCaseFormatter.formatData(data);
    printer.printData(formattedDataUpper);
  }
}

const p = new DataProcessor();
p.processData('SOLID Principles!!!');

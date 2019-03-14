// Principle #3: Liskov substitution principle
// Every subclass/derived class should be substitutable for their base/parent class.

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
  processData(data, formatType) {
    const formatter = this.DataFormatterWithType(formatType);
    const formattedData = formatter.formatData(data);
    const printer = new DataPrinter();
    printer.printData(formattedData);
  }

  DataFormatterWithType(type) {
    switch (type) {
      case 'U':
        return new UpperCaseDataFormatter();
      case 'L':
        return new LowerCaseDataFormatter();
      default:
        return new DataFormatter();
    }
  }
}

const p = new DataProcessor();
p.processData('SOLID Principles!!!');
p.processData('SOLID Principles!!!', 'U');
p.processData('SOLID Principles!!!', 'L');

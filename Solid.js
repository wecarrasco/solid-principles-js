// Principle #4: Interface Segregation Principle
// A client should never be forced to implement an interface that it doesn’t use or
// clients shouldn’t be forced to depend on methods they do not use.

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
    throw new Error('Not implemented method');
  }
}

class DataPrinterConsole extends DataPrinter {
  printData(data) {
    console.log('Printing Data...');
    console.log(data);
  }
}

class DataPrinterBreakLine extends DataPrinter {
  printData(data) {
    console.log('Printing Data...');
    const br = this.br();
    console.log(data + br);
  }

  br() {
    return '\n';
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

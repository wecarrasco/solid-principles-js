// Principle #5: Dependency inversion principle
// Entities must depend on abstractions not on concretions.
// It states that the high level module must not depend on the low level module,
// but they should depend on abstractions.

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
  constructor(formatType, printType) {
    this.formatter = formatType;
    this.printer = printType;
  }

  processData(data) {
    const formattedData = this.formatter.formatData(data);
    this.printer.printData(formattedData);
  }
}

const p = new DataProcessor(
  new UpperCaseDataFormatter(),
  new DataPrinterConsole()
);
p.processData('SOLID Principles!!!');

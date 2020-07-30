import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
import { AwesomeReport } from 'jasmine-awesome-report';

export let reporter = () => {
  const config = {
    fullPath: 'awesome-report',
    filename: 'report',
    merge: true,
  };
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.PRETTY
    }
  }));
};

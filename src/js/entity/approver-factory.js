var LoanAgent = require('./loan-agent');
var LoanLineManager = require('./loan-line-manager');
var LoanBranchManager = require('./loan-branch-manager');
var ApproverConstants = require('../constants/approver-constants');

class ApproverFactory {
    build(type, threshold) {
        var createdElement = null;

        switch (type) {
            case ApproverConstants.AGENT:
                createdElement = new LoanAgent(ApproverConstants.AGENT, threshold);
                break;
            case ApproverConstants.LINE_MANAGER:
                createdElement = new LoanLineManager(ApproverConstants.LINE_MANAGER, threshold);
                break;
            case ApproverConstants.BRANCH_MANAGER:
                createdElement = new LoanBranchManager(ApproverConstants.BRANCH_MANAGER, threshold);
                break;
            default:
                throw ('Unknown value ' + type);
                break;
        }

        return createdElement;
    }
}

module.exports = ApproverFactory;

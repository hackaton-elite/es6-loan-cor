var ApproverFactory = require('../entity/approver-factory');
var ApproverConstants = require('../constants/approver-constants');

class LoanApprovalService {
    constructor() {
        this.approvers = [];

        this.registerApprovers();
    }

    getApprovers() {
        return this.approvers;
    }

    registerApprovers() {
        /* Instantiate loan approvers. */
        var approverFactory = new ApproverFactory();
        var loanAgent = approverFactory.build(ApproverConstants.AGENT, 1000);
        var loanLineManager = approverFactory.build(ApproverConstants.LINE_MANAGER, 10000);
        var loanBranchManager = approverFactory.build(ApproverConstants.BRANCH_MANAGER, 50000);

        /* Define chain. */
        loanAgent.setNextLink(loanLineManager);
        loanLineManager.setNextLink(loanBranchManager);

        /* Push them to the chain. */
        this.approvers.push(loanAgent);
        this.approvers.push(loanLineManager);
        this.approvers.push(loanBranchManager);
    }

    submitLoanRequest(loanEntity) {
        return this.approvers[0].handle(loanEntity);
    }
}

module.exports = LoanApprovalService;

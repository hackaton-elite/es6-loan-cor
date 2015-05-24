var ApprovalData = require('./approval-data');
var ApproverEntity = require('./approver-entity');

class LoanBranchManager extends ApproverEntity {
    handle(loanEntity) {
        var approvalData = new ApprovalData();
        approvalData.setApprover(this);

        if (loanEntity.getValue() > this.getThreshold()) {
            approvalData.setApprovedStatus(false);
        }

        return approvalData;
    }
}

module.exports = LoanBranchManager;

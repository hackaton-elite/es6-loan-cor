var ApprovalData = require('./approval-data');
var ApproverEntity = require('./approver-entity');

class LoanAgent extends ApproverEntity {
    handle(loanEntity) {
        if (loanEntity.getValue() < this.getThreshold()) {
            var approvalData = new ApprovalData();
            approvalData.setApprover(this);

            return approvalData;
        }

        return this.propagate(loanEntity);
    }
}

module.exports = LoanAgent;

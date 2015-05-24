class ApprovalData {
    constructor() {
        this.approved = true;
    }

    setApprover(approver) {
        this.approver = approver;
    }

    isApproved() {
        return this.approved;
    }

    setApprovedStatus(approved = true) {
        this.approved = approved;
    }
}

module.exports = ApprovalData;

jest.dontMock('../../dist/js/service/loan-approval-service');
jest.dontMock('../../dist/js/entity/loan-entity');
jest.dontMock('../../dist/js/entity/approver-factory');
jest.dontMock('../../dist/js/entity/loan-agent');
jest.dontMock('../../dist/js/entity/loan-line-manager');
jest.dontMock('../../dist/js/entity/loan-branch-manager');
jest.dontMock('../../dist/js/entity/approver-entity');
jest.dontMock('../../dist/js/entity/approval-data');
jest.dontMock('../../dist/js/constants/approver-constants');

var LoanApprovalService = require('../../dist/js/service/loan-approval-service');
var LoanEntity = require('../../dist/js/entity/loan-entity');
var ApproverConstants = require('../../dist/js/constants/approver-constants');

describe('Loan Approval Queue', function () {
    var loanApprovalService = new LoanApprovalService();

    it('will contain a list of loan approvers', function () {
        var approvers = loanApprovalService.getApprovers();

        expect(approvers.length).toBeGreaterThan(0);
    })

    it('will approve a loan of < 1000 through an agent', function () {
        var smallLoan = new LoanEntity(800);

        var approvalData = loanApprovalService.submitLoanRequest(smallLoan);

        expect(approvalData).toNotBe(undefined);
        expect(approvalData.isApproved()).toEqual(true);
        expect(approvalData.approver.getType()).toEqual(ApproverConstants.AGENT);
    });

    it('will approve a loan of < 10000 through a line manager', function () {
        var mediumLoan = new LoanEntity(8000);

        var approvalData = loanApprovalService.submitLoanRequest(mediumLoan);

        expect(approvalData).toNotBe(undefined);
        expect(approvalData.isApproved()).toEqual(true);
        expect(approvalData.approver.getType()).toEqual(ApproverConstants.LINE_MANAGER);
    });

    it('will approve a loan of > 10000 through a branch manager', function () {
        var highLoan = new LoanEntity(12000);

        var approvalData = loanApprovalService.submitLoanRequest(highLoan);

        expect(approvalData).toNotBe(undefined);
        expect(approvalData.isApproved()).toEqual(true);
        expect(approvalData.approver.getType()).toEqual(ApproverConstants.BRANCH_MANAGER);
    });

    it('will not approve loans of > 50000', function () {
        var highLoan = new LoanEntity(51000);

        var approvalData = loanApprovalService.submitLoanRequest(highLoan);

        expect(approvalData).toNotBe(undefined);
        expect(approvalData.isApproved()).toEqual(false);
        expect(approvalData.approver.getType()).toEqual(ApproverConstants.BRANCH_MANAGER);
    })
});

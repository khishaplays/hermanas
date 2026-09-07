"""
Abstractions.
Bank Class →
deposits, withdrawal,
show account.
getter and setter. →
→ easy to scale function <understing>
-----------------------------------

→ Login account
→ Create account
→ Deposit
→ Withdrawal
→→ account balance
"""

class BankAccount:

    def __init__(self, name, balance, no):
        self.name = name
        self.balance = balance
        self.account_no = no


    def get_balance(self):
        return self.balance

    #setter
    def deposit(self, amount):
        self.balance += amount

    def withdrawal(self):
        pass

    def show_account_details(self):
        pass

    def show_account_details(self):
        print(f"owner: {self.name}")
        print(f"balance: {self.balance}")
        print(f"account number: {self.account_no}")

    john=BankAccount(name="John mwangi",balance=0, account_no="123456")
    john.show_account_details()
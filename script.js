
const PROJECTS = [
  {
    name: "Book Store",
    file: "book_store.cpp",
    lang: "cpp",
    desc: "A C++ library management system for adding, viewing, searching, deleting, borrowing, and returning books, while also managing library users.",
    tags: ["C++", "Arrays", "Functions", "Library System"],
    code:
      `#include <iostream>
using namespace std;

string books[50];
string users[100];
string authors[50];
int usersphones[100];
int borrowedBy[50];
int userscount = 0;
int bookscount = 0;

void addBook()
{
    if (bookscount >= 50)
    {
        cout << "Max books reached !\n";
        return;
    }

    cout << "Enter book name : ";
    cin.ignore();
    getline(cin, books[bookscount]);

    cout << "\nEnter book's author name : ";
    getline(cin, authors[bookscount]);

    bookscount++;
    cout << "Book is added successfully";
}

void viewBooks()
{
    if (bookscount == 0)
    {
        cout << "There's no books to view.";
        return;
    }

    for (int i = 0; i < bookscount; i++)
    {
        cout << "\n ID : " << i;
        cout << "\n Name : " << books[i];
        cout << "\n Author : " << authors[i] << endl;

        cout << "-------------------\n";
    }
}

void searchBooks()
{
    string book;
    cout << "Enter book name to search : ";
    cin >> book;

    for (int i = 0; i < bookscount; i++)
    {
        if (books[i] == book)
        {
            cout << "\n Found !\n";
            cout << "\n ID : " << i;
            cout << "\n Name : " << books[i];
            cout << "\n Author : " << authors[i] << endl;

            cout << "-------------------\n";
        }
    }

    cout << "Book not found !";
}

void deleteBook()
{
    string book;
    cout << "Enter book name to delete : ";
    cin >> book;

    for (int i = 0; i < bookscount; i++)
    {
        if (books[i] == book)
        {
            for (int j = i; j < bookscount - 1; j++)
            {
                books[j] = books[j + 1];
                authors[j] = authors[j + 1];
            }

            bookscount--;
            cout << "Book deleted successfully.";
            return;
        }
    }
    cout << "Book not found !";
}

void addUser()
{
    if (userscount >= 100)
    {
        cout << "Max uses reached !";
        return;
    }

    cout << "Enter user's name : ";
    getline(cin, users[userscount]);

    cout << "Enter user's phone number : ";
    cin.ignore();
    getline(cin, usersphones[userscount]);

    userscount++;
    cout << "User added succesfully";
}

void viewUsers()
{
    if (userscount == 0)
    {
        cout << "No users to view.";
        return;
    }

    for (int i = 0; i < userscount; i++)
    {
        cout << "\nUser ID : " << i;
        cout << "\nUser Name : " << users[i];
        cout << "\nUser PhoneNumber : " << usersphones[i] << endl;
        cout << "-------------------\n";
    }
}

void borrowBook()
{
    if (bookscount == 0)
    {
        cout << "No books available.\n";
        return;
    }

    if (userscount == 0)
    {
        cout << "No users available.\n";
        return;
    }

    cout << "\nAvailable Books:\n";
    for (int i = 0; i < bookscount; i++)
    {
        if (borrowedBy[i] == -1)
        {
            cout << "ID: " << i << " | " << books[i] << " | " << authors[i] << endl;
        }
    }

    int bookID;
    cout << "\nEnter Book ID: ";
    cin >> bookID;

    if (bookID < 0 || bookID >= bookscount)
    {
        cout << "Invalid Book ID.\n";
        return;
    }

    if (borrowedBy[bookID] != -1)
    {
        cout << "Book is already borrowed.\n";
        return;
    }

    cout << "\nUsers:\n";
    for (int i = 0; i < userscount; i++)
    {
        cout << "ID: " << i << " | " << users[i] << " | " << usersphones[i] << endl;
    }

    int userID;
    cout << "\nEnter User ID: ";
    cin >> userID;

    if (userID < 0 || userID >= userscount)
    {
        cout << "Invalid User ID.\n";
        return;
    }

    borrowedBy[bookID] = userID;

    cout << "Book borrowed successfully.\n";
}

void returnBook()
{
    if (bookscount == 0)
    {
        cout << "No books available.\n";
        return;
    }

    cout << "\nBorrowed Books:\n";
    for (int i = 0; i < bookscount; i++)
    {
        if (borrowedBy[i] != -1)
        {
            cout << "ID: " << i << " | " << books[i]
                 << " | Borrowed by: " << users[borrowedBy[i]] << endl;
        }
    }

    int bookID;
    cout << "\nEnter Book ID to return: ";
    cin >> bookID;

    if (bookID < 0 || bookID >= bookscount)
    {
        cout << "Invalid Book ID.\n";
        return;
    }

    if (borrowedBy[bookID] == -1)
    {
        cout << "Book is already available.\n";
        return;
    }

    borrowedBy[bookID] = -1;

    cout << "Book returned successfully.\n";
}

int main()
{
    for (int i = 0; i < 50; i++)
    {
        borrowedBy[i] = -1;
    }
    while (true)
    {
        int choice;
        cout << "\n=======Menu=======" << endl;
        cout << "1. Add Book\n2. View Books\n3. Search Books\n4. Delete Book\n5. Add User\n6. View Users\n7. Borrow Book\n8. Return Book\n9. Exit\n";
        cin >> choice;

        if (choice == 1)
        {
            addBook();
        }
        else if (choice == 2)
        {
            viewBooks();
        }
        else if (choice == 3)
        {
            searchBooks();
        }
        else if (choice == 4)
        {
            deleteBook();
        }
        else if (choice == 5)
        {
            addUser();
        }
        else if (choice == 6)
        {
            viewUsers();
        }
        else if (choice == 7)
        {
            borrowBook();
        }
        else if (choice == 8)
        {
            returnBook();
        }
        else if (choice == 9)
        {
            cout << "Exiting.";
            break;
        }
        else
        {
            cout << "Wrong input !";
        }
    }

    return 0;
}

----------

#include <iostream>
using namespace std;

int main () {
    int balance = 1000;
    int withdraw;
    int deposit;
    int ops;
    int pin;

    do {
        cout << "Please enter your PIN.\n";
        cin >> pin;

        if (pin != 135) {
            cout << "PIN is not correct. Please try again !\n";
        }

    } while (pin != 135);


    do {
        cout << "\nEnter number of required process.\n";
        cout << "1. Check Current Balance.\n";
        cout << "2. Withdraw.\n";
        cout << "3. Deposit.\n";
        cout << "4. Exit.\n";
        cin >> ops;

        if (ops == 1) {
            cout << "Your Current balance is : " << balance;
        }
        else if (ops == 2) {
            cout << "Enter the amount you would like to withdraw.\n";
            cin >> withdraw;

            if (withdraw > 0 && withdraw <= balance && withdraw != (float)) {
            balance -= withdraw;
            cout << "\nWithdrawing.";
            cout << "\n Your New Current Balance is : " << balance;
        }
        else {
            cout << "\nNot enough balance.";
        }
        }
        else if (ops == 3 && withdraw != (float)) {
            cout << "Enter the amount you would like to deposit : ";
            cin >> deposit;
            if (deposit > 0 ) {
                balance += deposit;
                cout << "You succesfully deposited " << deposit;
                cout << "\nYour new balance is : " << balance;
            }
            else {
                cout << "Failed. Try Again !";
            }
        }
        else if(ops == 4) {
            cout << "\nThanks for using our services.";
        }
        else {
            cout << "\nPlease try again !";
        }




    } while (ops != 4);

    return 0;
}`
  },
  {
    name: "XO Game",
    file: "XO.cpp",
    lang: "cpp",
    desc: "A C++ Tic-Tac-Toe game for two players with board initialization, move validation, winner detection, draw detection, and replay support.",
    tags: ["C++", "2D Arrays", "Functions", "Game Logic"],
    code:
      `
#include <iostream>
#include <cmath>
using namespace std;

void initBoard(char board[3][3])
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            board[i][j] = ' ';
        }
    }
}

void printBoard(char board[3][3])
{
    cout << endl;
    for (int i = 0; i < 3; i++)
    {
        cout << " " << board[i][0] << " | " << board[i][1] << " | " << board[i][2] << endl;
        if (i != 2)
        {
            cout << "---|---|---" << endl;
        }
    }
    cout << endl;
}

void getMove(char currentPlayer, char board[3][3])
{
    bool valid = false;
    int row, col;
    while (!valid)
    {
        cout << currentPlayer << "'s turn. Enter row (0-2) and column (0-2): " << endl;
        cout << "row: ";
        cin >> row;
        cout << "column:";
        cin >> col;

        if (row < 0 || row > 2 || col < 0 || col > 2)
        {
            cout << "Invalid position, try again." << endl;
        }
        else if (board[row][col] != ' ')
            cout << "Cell already taken, try again." << endl;

        else
            valid = true;
    }
    board[row][col] = currentPlayer;
}

bool checkWinner(char board[3][3], char &winner)
{
    for (int i = 0; i < 3; i++)
    {
        if (board[i][0] != ' ' && board[i][0] == board[i][1] && board[i][1] == board[i][2])
        {
            winner = board[i][0];
            return true;
        }
    }
    for (int j = 0; j < 3; j++)
    {
        if (board[0][j] != ' ' && board[0][j] == board[1][j] && board[1][j] == board[2][j])
        {
            winner = board[0][j];
            return true;
        }
    }
    if (board[0][0] != ' ' && board[0][0] == board[1][1] && board[1][1] == board[2][2])
    {
        winner = board[0][0];
        return true;
    }
    if (board[0][2] != ' ' && board[0][2] == board[1][1] && board[1][1] == board[2][0])
    {
        winner = board[0][2];
        return true;
    }

    return false;
}

bool checkDraw(char board[3][3])
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (board[i][j] == ' ')
            {
                return false;
            }
        }
    }
    return true;
}

void playRound(char board[3][3], char currentPlayer, bool gameOver, char winner)
{
    initBoard(board);
    currentPlayer = 'X';
    gameOver = false;
    winner = ' ';

    while (!gameOver)
    {
        printBoard(board);
        getMove(currentPlayer, board);

        if (checkWinner(board, winner))
        {
            printBoard(board);
            cout << currentPlayer << " wins!" << endl;
            gameOver = true;
        }
        else if (checkDraw(board))
        {
            printBoard(board);
            cout << "It's a draw!" << endl;
            gameOver = true;
        }
        else
        {
            if (currentPlayer == 'X')
            {
                currentPlayer = 'O';
            }
            else
            {
                currentPlayer = 'X';
            }
        }
    }
}
int main()
{
    // ===== GLOBAL VARIABLES =====
    char board[3][3];
    char currentPlayer;
    bool gameOver = false;
    char winner = ' ';
    char playAgain = 'y';

    while (playAgain == 'y' || playAgain == 'Y')
    {
        playRound(board, currentPlayer, gameOver, winner);
        cout << "Play Again? (y/n): ";
        cin >> playAgain;
    }

    return 0;
}`
  },
  {
    name: "Student Management System",
    file: "SMS.cpp",
    lang: "cpp",
    desc: "A C++ student management system for adding, viewing, searching, editing, and deleting students, with grade storage, average calculation, and pass/fail results.",
    tags: ["C++", "2D Arrays", "Functions", "Student Management"],
    code:
      `#include <iostream>
using namespace std;

string names[100];
float grades[100][3];
int studentCount = 0;

// Add Student
void addStudent()
{
    if (studentCount >= 100)
    {
        cout << "Max students reached!\n";
        return;
    }

    cout << "Enter student name: ";
    cin >> names[studentCount];

    for (int i = 0; i < 3; i++)
    {
        cout << "Enter grade " << i + 1 << ": ";
        cin >> grades[studentCount][i];
    }

    studentCount++;
    cout << "Student added successfully!\n";
}

// Show All Students
void showStudents()
{
    if (studentCount == 0)
    {
        cout << "No students found!\n";
        return;
    }

    for (int i = 0; i < studentCount; i++)
    {
        cout << "\nID: " << i;
        cout << "\nName: " << names[i] << endl;

        for (int j = 0; j < 3; j++)
        {
            cout << "Grade " << j + 1 << ": " << grades[i][j] << endl;
        }

        cout << "-------------------\n";
    }
}

// Search Student
void searchStudent()
{
    string name;
    cout << "Enter student name to search: ";
    cin >> name;

    for (int i = 0; i < studentCount; i++)
    {
        if (names[i] == name)
        {
            cout << "\nFound!\n";
            cout << "Name: " << names[i] << endl;

            for (int j = 0; j < 3; j++)
            {
                cout << "Grade " << j + 1 << ": " << grades[i][j] << endl;
            }
            return;
        }
    }

    cout << "Student not found!\n";
}

// Edit Student
void editStudent()
{
    string name;
    cout << "Enter student name to edit: ";
    cin >> name;

    for (int i = 0; i < studentCount; i++)
    {
        if (names[i] == name)
        {
            cout << "Enter new grades:\n";

            for (int j = 0; j < 3; j++)
            {
                cout << "Grade " << j + 1 << ": ";
                cin >> grades[i][j];
            }

            cout << "Updated successfully!\n";
            return;
        }
    }

    cout << "Student not found!\n";
}

// Delete Student
void deleteStudent()
{
    string name;
    cout << "Enter student name to delete: ";
    cin >> name;

    for (int i = 0; i < studentCount; i++)
    {
        if (names[i] == name)
        {
            for (int j = i; j < studentCount - 1; j++)
            {
                names[j] = names[j + 1];

                for (int k = 0; k < 3; k++)
                {
                    grades[j][k] = grades[j + 1][k];
                }
            }

            studentCount--;
            cout << "Deleted successfully!\n";
            return;
        }
    }

    cout << "Student not found!\n";
}

// Average
float calcAverage(float g1, float g2, float g3)
{
    return (g1 + g2 + g3) / 3;
}

// Results
void showResults()
{
    if (studentCount == 0)
    {
        cout << "No students found!\n";
        return;
    }

    for (int i = 0; i < studentCount; i++)
    {
        float avg = calcAverage(grades[i][0], grades[i][1], grades[i][2]);

        cout << "\nName: " << names[i];
        cout << "\nAverage: " << avg;

        if (avg >= 50)
            cout << "\nResult: PASS";
        else
            cout << "\nResult: FAIL";

        cout << "\n-------------------\n";
    }
}

//MAIN MENU
int main()
{
    int choice;

    while (true)
    {
        cout << "\n===== STUDENT SYSTEM =====\n";
        cout << "1. Add Student\n";
        cout << "2. Show Students\n";
        cout << "3. Search Student\n";
        cout << "4. Edit Student\n";
        cout << "5. Delete Student\n";
        cout << "6. Show Results\n";
        cout << "7. Exit\n";
        cout << "Enter choice: ";

        cin >> choice;

        if (choice == 1)
            addStudent();
        else if (choice == 2)
            showStudents();
        else if (choice == 3)
            searchStudent();
        else if (choice == 4)
            editStudent();
        else if (choice == 5)
            deleteStudent();
        else if (choice == 6)
            showResults();
        else if (choice == 7)
            break;
        else
            cout << "Invalid choice!\n";
    }

    return 0;
}`
  },
  {
    name: "Cafe System",
    file: "cafe.cpp",
    lang: "cpp",
    desc: "A C++ cafe ordering system that displays a menu, takes customer orders, calculates the subtotal, applies a 10% discount to qualifying orders, and prints the final receipt.",
    tags: ["C++", "Arrays", "Functions", "Menu System"],
    code:
      `#include <iostream>
#include <cmath>
using namespace std;

void showMenu(string names[], double prices[])
{
    cout << "\n===== cafe menu =====\n";
    for (int i = 0; i < 5; i++)
    {
        cout << "[" << i + 1 << "] " << names[i] << " - " << prices[i] << endl;
    }
    cout << "[9] Done ordering\n";
}

void printRecipet(string names[], double prices[], double &total, string &customername, float &discount);

void takeOrder(string names[], double prices[], double &total, string &customername, float &discount)
{
    int ch;
    showMenu(names, prices);
    cout << "\n======= cafe system =======\n";
    cout << "Enter customer name: ";
    cin >> customername;
    while (ch != 9)
    {
        cout << "\nEnter item number to order: ";
        cin >> ch;
        if (ch == 1)
        {
            total += prices[0];
            cout << names[0] << " added. Running total: " << total << " EGP";
        }
        else if (ch == 2)
        {
            total += prices[1];
            cout << names[1] << " added. Running total: " << total << " EGP";
        }
        else if (ch == 3)
        {
            total += prices[2];
            cout << names[2] << " added. Running total: " << total << " EGP";
        }
        else if (ch == 4)
        {
            total += prices[3];
            cout << names[3] << " added. Running total: " << total << " EGP";
        }
        else if (ch == 5)
        {
            total += prices[4];
            cout << names[4] << " added. Running total: " << total << " EGP";
        }
        else if (ch == 9)
        {
            printRecipet(names, prices, total, customername, discount);
        }
        else
        {
            cout << "Wrong item number.";
        }
    }
}

void printRecipet(string names[], double prices[], double &total, string &customername, float &discount)
{
    discount = total * 0.10;
    cout << "\n===== receipt — " << customername << " =====\n";
    cout << "Subtotal: " << total << endl;
    if (total > 50)
    {
        discount = total * 0.10;
        cout << "Discount applied (10%): -" << discount << " EGP\n";
    }
    else
    {
        discount = 0;
        cout << "No discount.\n";
    }
    cout << "Total: " << total - discount << endl;

    int ch2;
    cout << "\nServe next customer ? [1] Yes [2] End Shift\n";
    cin >> ch2;
    if (ch2 == 1)
    {
        total = 0;
        discount = 0;
        takeOrder(names, prices, total, customername, discount);
    }
    else if (ch2 == 2)
    {
        cout << "Ending Shift.";
    }
}

int main()
{
    string names[5] = {"Espresso", "Cappuccino", "Croissant", "Cheese toast", "Fresh juice"};
    double prices[5] = {25.00, 40.99, 60.45, 50.55, 35.99};
    double total = 0;
    string customername;
    float discount = 0;

    takeOrder(names, prices, total, customername, discount);
}`
  },
  {
    name: "D&D Game",
    file: "dad.cpp",
    lang: "cpp",
    desc: "A C++ dungeon adventure game where the player fights enemies, manages HP and attack power, earns gold, visits a shop, and faces a final boss.",
    tags: ["C++", "Functions", "Arrays", "Game Logic"],
    code:
      `#include <iostream>
#include <cmath>
using namespace std;

void showStatus(string pname, int hp, int att, int gold)
{
    cout << "Welcome, " << pname << "! " << "HP : " << hp << " | Attack : " << att << " | Gold : " << gold << endl;
}

void visitShop(int &hp, int &att, int &gold)
{
    char choose;
    do
    {
        cout << "\n-- Shop -- Gold: " << gold << endl;
        cout << "[a] Buy a +10 health portion (20 gold)  [b] Buy a +5 power attack (10 gold)  [c] Leave" << endl;
        cin >> choose;

        switch (choose)
        {
        case 'a':
        case 'A':
            if (gold >= 20)
            {
                gold -= 20;
                hp += 10;
                cout << "You bought a +10 health portion. Your current gold: " << gold;
            }
            else
            {
                cout << "Nout enough gold. Come back later." << endl;
            }
            break;
        case 'b':
        case 'B':
            if (gold >= 10)
            {
                gold -= 10;
                att += 5;
                cout << "You bought a +5 power attack. Your current gold: " << gold;
            }
            else
            {
                cout << "Nout enough gold. Come back later." << endl;
            }
            break;
        case 'c':
        case 'C':
            cout << "Returning to field." << endl;
            break;
        default:
            cout << "Wrong choice !";
        }
    } while (choose != 'c' && choose != 'C');
}

void endGame(string &pname, int &hp, int &att, int &gold)
{
    if (hp > 0)
    {
        cout << "Good Job! You defeated the boss and all of his servants.\n";
        cout << "Your Current Stats:\n";
        showStatus(pname, hp, att, gold);
    }
    else
    {
        cout << "You lost but don't worry you can always try again.";
    }
}

void bossFight(string enemies[], int enemieshp[], int &hp, int &att, int &gold, string &pname)
{
    cout << "-- Boss Room " << ": A " << enemies[3] << " appears! (HP: " << enemieshp[3] << ") --" << endl;
    int chh;
    cout << "[1] Fight  [2] Visit Shop  [3] Show Status" << endl;
    cout << "Your choice: ";
    cin >> chh;
    if (chh == 1)
    {
        while (hp > 0)
        {
            enemieshp[3] -= att;
            cout << "You deal " << att << " damage. " << enemies[3] << "'s HP : " << enemieshp[3] << endl;
            int diff = abs(att - enemieshp[3]);
            cout << "Damage difference: " << diff << endl;

            if (enemieshp[3] <= 0)
            {
                cout << enemies[3] << " defeated! +9999999 gold. ";
                gold += 99999999;
                cout << "Total gold: " << gold << endl;
                endGame(pname, hp, att, gold);
                break;
            }
            else
            {
                int damage = enemieshp[3] / 3;
                cout << enemies[3] << " hits you for " << damage << " damage. ";
                hp -= damage;
                cout << "Your HP: " << hp << endl;
            }
            if (hp <= 0)
            {
                cout << "Game Over! You died." << endl;
                endGame(pname, hp, att, gold);
                break;
            }
        }
    }
    else if (chh == 2)
    {
        visitShop(hp, att, gold);
    }
    else if (chh == 3)
    {
        showStatus(pname, hp, att, gold);
    }
    else
    {
        cout << "Wrong Choice !";
    }
}

void fight(string enemies[], int enemieshp[], int &hp, int &att, int &gold, string &pname)
{
    // Rooms
    for (int i = 0; i < 3; i++)
    {
        cout << "\n-- Room " << i + 1 << ": A " << enemies[i] << " appears! (HP: " << enemieshp[i] << ") --" << endl;
        int ch;
        cout << "[1] Fight  [2] Flee  [3] Visit Shop  [4] Show Status" << endl;
        cout << "Your choice: ";
        cin >> ch;
        if (ch == 1)
        {
            while (hp > 0)
            {
                enemieshp[i] -= att;
                cout << "You deal " << att << " damage. " << enemies[i] << "'s HP : " << enemieshp[i] << endl;
                int diff = abs(att - enemieshp[i]);
                cout << "Damage difference: " << diff << endl;

                if (enemieshp[i] <= 0)
                {
                    cout << enemies[i] << " defeated! +20 gold. ";
                    gold += 20;
                    cout << "Total gold: " << gold << endl;
                    if (i == 2)
                    {
                        char cho;
                        cout << "Are you ready for the boss fight ? (Y/N)" << endl;
                        cin >> cho;
                        if (cho == 'y' || cho == 'Y')
                        {
                            bossFight(enemies, enemieshp, hp, att, gold, pname);
                        }
                        else if (cho == 'n' || cho == 'N')
                        {
                            visitShop(hp, att, gold);
                        }
                        else
                        {
                            cout << "Wrong Choice !";
                        }
                    }
                    break;
                }
                else
                {
                    int damage = enemieshp[i] / 3;
                    cout << enemies[i] << " hits you for " << damage << " damage. ";
                    hp -= damage;
                    cout << "Your HP: " << hp << endl;
                }
            }
            if (hp <= 0)
            {
                cout << "Game Over! You died." << endl;
                endGame(pname, hp, att, gold);
                break;
            }
        }
        else if (ch == 2)
        {
            continue;
        }
        else if (ch == 3)
        {
            visitShop(hp, att, gold);
        }
        else if (ch == 4)
        {
            showStatus(pname, hp, att, gold);
        }
        else
        {
            cout << "Wrong Choice !";
        }
    }
}

int main()
{
    // Declares
    string pname;
    int hp = 100, att = 20, gold = 0;
    string enemies[4] = {"Goblin", "Sekelton", "Zombie", "Dragon"};
    int enemieshp[4] = {50, 90, 150, 250};

    // Menu
    int choice;

    do
    {
        cout << "\n========== dungeon quest Menu ==========\n1. Start Game\n2. Game Story\n3. Exit\n";
        cin >> choice;
        if (choice == 1)
        {
            // Game Start
            cout << "\n========== dungeon quest ==========\n";
            cout << "Enter your hero's name : ";
            cin >> pname;
            showStatus(pname, hp, att, gold);
            fight(enemies, enemieshp, hp, att, gold, pname);
        }
        else if (choice == 2)
        {
            cout << "You wake up in a dungeon with 3 rooms\nEach room has an enemy with a name and HP. You choose to fight or flee. Fighting costs your own HP. Defeating an enemy gives you gold. Collecting enough gold lets you buy a health potion from a shop. The dungeon ends at the Boss Room — if you beat the boss, you win. If your HP hits zero, game over.";
        }
        else if (choice == 3)
        {
            cout << "Exiting Game.";
            break;
        }
        else
        {
            cout << "Wrong Choice! Try Again.";
        }
    } while (choice != 3);

    return 0;
}`
  },
  {
    name: "Guess the number",
    file: "guess.py",
    lang: "py",
    desc: "A Python number guessing game that generates a random secret number and gives higher-or-lower hints while limiting the player to a set number of attempts.",
    tags: ["Python", "Random", "Loops", "Game Logic"],
    code:
      `import random

def play(low=1, high=100, tries=7):
    secret = random.randint(low, high)
    print(f"I picked a number between {low} and {high}. You get {tries} tries.")

    for attempt in range(1, tries + 1):
        guess = input("Your guess: ")
        if not guess.isdigit():
            print("Numbers only, please")
            continue

        guess = int(guess)
        if guess == secret:
            print(f"Got it in {attempt} tries")
            return True
        elif guess < secret:
            print("Higher")
        else:
            print("Lower")

    print(f"Out of tries. The number was {secret}")
    return False

play()`
  },
  {
    name: "J.A.R.V.I.S System",
    file: "jarvis.py",
    lang: "py",
    desc: "A Python desktop voice assistant that listens for a wake word, transcribes spoken commands, processes them through an LLM, detects Arabic or English, and responds using text-to-speech.",
    tags: ["Python", "AI Assistant", "Speech Recognition", "LLM", "Text-to-Speech"],
    code:
      `Entry point for the Jarvis desktop AI assistant.

Orchestrates the full pipeline:

    1. Wait for the wake word ("Jarvis") using continuous offline listening.
    2. Play an acknowledgment cue and enter Active Listening Mode.
    3. Record + transcribe the user's spoken command (STT).
    4. Send the command to the LLM brain, which either calls a system tool
       or replies conversationally.
    5. Speak the response back to the user (TTS).
    6. Return to step 1.

Run with:  python main.py
Stop with: Ctrl+C in the terminal, or say "goodbye" / "exit" / "stop listening".
"""

import sys
import time

from config import settings
from core.llm_brain import LLMBrain
from core.stt_tts import SpeechToText, TextToSpeech
from core.wake_word import WakeWordDetector
from modules.messaging import send_notification
from utils.logger import get_logger

logger = get_logger(__name__)

# Phrases that end the whole program when spoken as a command.
EXIT_PHRASES = {"exit", "quit", "goodbye jarvis", "stop listening", "shut down jarvis"}


def detect_language(text: str) -> str:
    """
    Very lightweight language detection: if the text contains Arabic
    Unicode characters, treat it as Arabic; otherwise assume English.
    Good enough to pick the right TTS voice without pulling in a full
    language-detection dependency.
    """
    for ch in text:
        if "\u0600" <= ch <= "\u06FF":
            return "ar"
    return "en"


def run_active_listening(stt: SpeechToText, tts: TextToSpeech, brain: LLMBrain) -> bool:
    """
    Handle one full "Active Listening" turn: record a command, get the LLM's
    response, and speak it back.

    Returns:
        False if the user asked to exit the program, True otherwise.
    """
    user_text = stt.transcribe()

    if not user_text:
        tts.speak("I didn't hear a command. Going back to sleep.")
        return True

    logger.info(f"User said: {user_text}")

    if user_text.strip().lower() in EXIT_PHRASES:
        tts.speak("Goodbye!")
        return False

    reply = brain.process_command(user_text)
    lang = detect_language(user_text)

    # لو تنفيذ الأمر رجّع رد فاضي أو الموديل نفّذ tool بدون كلام مكتوب، ينطق كلمة تأكيد تلقائياً
    if not reply or not reply.strip():
        reply = "تم يا فندم" if lang == "ar" else "Done, sir."

    logger.info(f"Jarvis reply: {reply}")
    tts.speak(reply, language=lang)
    return True


def main():
    """Bootstraps all components and runs the main wake-word loop forever."""
    logger.info(f"Starting {settings.assistant_name}...")

    warnings = settings.validate()
    for w in warnings:
        logger.warning(w)

    try:
        stt = SpeechToText()
        tts = TextToSpeech()
        brain = LLMBrain()
        wake_detector = WakeWordDetector()
    except Exception as e:
        logger.critical(f"Failed to initialize Jarvis components: {e}")
        sys.exit(1)

    tts.speak(f"{settings.assistant_name} is online.")
    send_notification(settings.assistant_name, "Assistant is now running in the background.")

    try:
        while True:
            def on_wake():
                tts.speak("Hello Mr. Yousef")
                time.sleep(0.5)

            wake_detector.listen_for_wake_word(on_detected=on_wake)

            keep_running = run_active_listening(stt, tts, brain)
            if not keep_running:
                break

    except KeyboardInterrupt:
        logger.info("Interrupted by user (Ctrl+C).")
    except Exception as e:
        logger.critical(f"Fatal error in main loop: {e}")
    finally:
        wake_detector.cleanup()
        logger.info(f"{settings.assistant_name} has shut down.")


if __name__ == "__main__":
    main()`
  },
  {
    name: "Currency converter",
    file: "currency.js",
    lang: "js",
    desc: "A JavaScript currency converter that fetches exchange rates from an API and converts a USD amount to EGP, with error handling for failed requests.",
    tags: ["JavaScript", "API", "Fetch", "Async/Await", "DOM"],
    code:
      `// Currency converter
const API = "https://api.exchangerate.host/latest";

async function convert(amount, from, to) {
  try {
    const res = await fetch(\`\${API}?base=\${from}&symbols=\${to}\`);
    if (!res.ok) throw new Error("Bad response");

    const data = await res.json();
    const rate = data.rates[to];
    return (amount * rate).toFixed(2);
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function show() {
  const amount = Number(document.querySelector("#amount").value);
  const result = await convert(amount, "USD", "EGP");
  const box = document.querySelector("#result");

  box.textContent = result
    ? amount + " USD = " + result + " EGP"
    : "Couldn't reach the rates. Check your connection.";
}`
  },
  {
    name: "Flip card",
    file: "card.css",
    lang: "css",
    desc: "A CSS 3D flip card animation that rotates a card to reveal its back side on hover, with reduced-motion support for accessibility.",
    tags: ["CSS", "3D Transform", "Animation", "Hover Effects", "Accessibility"],
    code:
      `.card {
  width: 300px;
  aspect-ratio: 5 / 3;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 16px;
  backface-visibility: hidden;
}

.card-back {
  background: linear-gradient(135deg, #0e2419, #06120d);
  transform: rotateY(180deg);
}

@media (prefers-reduced-motion: reduce) {
  .card-inner { transition: none; }
}`
  }
];


/* ---------- syntax highlighting ---------- */

const KEYWORDS = {
  js: "const|let|var|function|return|if|else|for|while|of|in|new|try|catch|throw|async|await|class|import|export|from|typeof|default|true|false|null",
  py: "def|return|if|elif|else|for|while|in|import|from|as|try|except|with|class|lambda|None|True|False|not|and|or|print|range|len|str|int",
  css: "and|not|only|inset|grid",
  cpp: "int|double|float|char|bool|void|string|struct|class|return|if|else|for|while|const|using|namespace|include|vector|size_t|true|false|static_cast|cout|cin|endl|new|delete|public|private"
};

const LANG_LABEL = { js: "JavaScript", py: "Python", css: "CSS", html: "HTML", cpp: "C++" };

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlight(code, lang) {
  const src = esc(code);
  const comment = lang === "py" ? "#[^\\n]*" : "\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/";
  const kw = KEYWORDS[lang] || KEYWORDS.js;

  const rx = new RegExp(
    "(" + comment + ")" +
    "|(\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*'|`(?:\\\\.|[^`\\\\])*`)" +
    "|\\b(" + kw + ")\\b" +
    "|\\b(\\d+(?:\\.\\d+)?)\\b" +
    "|([A-Za-z_$][\\w$-]*)(?=\\s*\\()",
    "g"
  );

  const html = src.replace(rx, (m, c, s, k, n, f) => {
    if (c) return '<i class="c">' + c + "</i>";
    if (s) return '<i class="s">' + s + "</i>";
    if (k) return '<i class="k">' + k + "</i>";
    if (n) return '<i class="n">' + n + "</i>";
    if (f) return '<i class="f">' + f + "</i>";
    return m;
  });

  return html
    .split("\n")
    .map((line, i) => '<span class="ln">' + (i + 1) + "</span>" + line)
    .join("\n");
}


/* ---------- render projects ---------- */

const listEl = document.getElementById("projects");
const filtersEl = document.getElementById("filters");

function draw(filter) {
  listEl.innerHTML = "";

  PROJECTS
    .filter((p) => filter === "all" || p.lang === filter)
    .forEach((p) => {
      const el = document.createElement("article");
      el.className = "proj";
      el.innerHTML = `
        <div class="head">
          <h3>${esc(p.name)}</h3>
          <p class="desc">${esc(p.desc)}</p>
          <div class="tags">${p.tags.map((t) => '<span class="tag">' + esc(t) + "</span>").join("")}</div>
        </div>
        <div class="codewrap">
          <div class="codebar">
            <span class="file">${esc(p.file)}</span>
            <span class="acts">
              <button data-act="copy">Copy</button>
              <button data-act="toggle">Show full code</button>
            </span>
          </div>
          <div class="code"><pre class="src">${highlight(p.code, p.lang)}</pre></div>
        </div>`;

      const box = el.querySelector(".code");
      el.querySelector('[data-act="toggle"]').onclick = (e) => {
        box.classList.toggle("open");
        e.target.textContent = box.classList.contains("open") ? "Collapse" : "Show full code";
      };
      el.querySelector('[data-act="copy"]').onclick = () => {
        navigator.clipboard.writeText(p.code).then(showToast);
      };

      listEl.appendChild(el);
    });
}

function showToast() {
  const t = document.getElementById("toast");
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1500);
}

const langs = ["all", ...new Set(PROJECTS.map((p) => p.lang))];
langs.forEach((l, i) => {
  const b = document.createElement("button");
  b.textContent = l === "all" ? "All" : LANG_LABEL[l] || l;
  b.setAttribute("aria-pressed", String(i === 0));
  b.onclick = () => {
    [...filtersEl.children].forEach((x) => x.setAttribute("aria-pressed", "false"));
    b.setAttribute("aria-pressed", "true");
    draw(l);
  };
  filtersEl.appendChild(b);
});

draw("all");
document.getElementById("count").textContent = PROJECTS.length;


/* ---------- hero typing ---------- */

const LINES = [
  ["o", "const "], ["f", "me"], ["o", " = {\n"],
  ["o", "  "], ["f", "name"], ["o", ": "], ["s", '"Yousef Mohsen"'], ["o", ",\n"],
  ["o", "  "], ["f", "role"], ["o", ": "], ["s", '"CS student, front-end dev"'], ["o", ",\n"],
  ["o", "  "], ["f", "city"], ["o", ": "], ["s", '"Assiut, Egypt"'], ["o", ",\n"],
  ["o", "  "], ["f", "stack"], ["o", ": ["], ["s", '"C++"'], ["o", ", "], ["s", '"Python"'], ["o", ", "], ["s", '"JS"'], ["o", "],\n"],
  ["o", "  "], ["f", "learning"], ["o", ": "], ["k", "true"], ["o", "\n};\n\n"],
  ["c", "// every project below is my own code"], ["o", ""]
];

const out = document.getElementById("typed");
const full = LINES.map(([c, t]) => '<i class="' + c + '">' + esc(t) + "</i>").join("");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduce) {
  out.innerHTML = full + '<span class="cursor">|</span>';
} else {
  let li = 0, ci = 0, html = "";

  (function type() {
    if (li >= LINES.length) {
      out.innerHTML = html + '<span class="cursor">|</span>';
      return;
    }
    const [cls, text] = LINES[li];
    ci++;
    if (ci > text.length) {
      html += '<i class="' + cls + '">' + esc(text) + "</i>";
      li++;
      ci = 0;
    }
    out.innerHTML = html + '<i class="' + cls + '">' + esc(text.slice(0, ci)) + "</i><span class=\"cursor\">|</span>";
    setTimeout(type, text.length > 1 ? 26 : 60);
  })();
}


/* ---------- nav follows the section you're reading ---------- */

const navLinks = [...document.querySelectorAll("#nav a")];
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.remove("active"));
      const link = navLinks.find((a) => a.getAttribute("href") === "#" + entry.target.id);
      if (link) link.classList.add("active");
    });
  },
  { rootMargin: "-20% 0px -70% 0px" }
);

sections.forEach((s) => spy.observe(s));
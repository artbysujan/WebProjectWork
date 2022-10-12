/*######################################
###       - Rajendra Pandit       ####
###            2N(PSI)            ####
######################################*/
#include<stdio.h>
#include<locale.h>
#include<string.h>
#include<conio.h>
#include<conio.c>

main2(){
setlocale(LC_ALL,"portuguese");
int a,b;
printf("\t");for(b=0;b<=20;b++){textcolor(LIGHTRED);textbackground(BLACK);printf("(%c)",3);}printf("\n");
for(a=0;a<=20;a++){printf("\t");textbackground(BLACK);textcolor(LIGHTGREEN);printf("(%c)",3);textbackground(WHITE);
printf("                                                         ");textbackground(BLACK);printf("(%c)\n",3);textcolor(LIGHTMAGENTA);}printf("\t");
for(b=0;b<=20;b++){printf("(%c)",3);}textcolor(BLACK);
}

main()
{
system("color 0f");
main2();
textbackground(WHITE);textcolor(BLACK);
gotoxy(21,3);printf(" _______        _           _ _           \n");
gotoxy(21,4);printf("|__   __|      | |         | | |          \n");
gotoxy(21,5);printf("   | |_ __ __ _| |__   __ _| | |__   ___  \n");
gotoxy(21,6);printf("   | | '__| _` | '_ | | _` | | '_ | | _ | \n");
gotoxy(21,7);printf("   | | | | (_| | |_) | (_| | | | | | (_) |\n");
gotoxy(21,8);printf("   |_|_|  |__,_|_.__| |__,_|_|_| |_||___| \n");
textcolor(BLUE);gotoxy(21,9);printf("                  Final \n");textcolor(BLACK);
gotoxy(21,11);printf("                 Módulo-8 \n");
gotoxy(21,12);printf("                   Psi \n");
gotoxy(21,13);printf("                 -------- \n");
gotoxy(21,14);printf("                   ---- \n");
gotoxy(21,15);printf("                    -- \n");
gotoxy(21,17);printf("     Conceitos Avançados de Programação\n");
gotoxy(21,19);printf("         Escola Secundária de Camões\n");
gotoxy(60,21);printf("Rajendra\n");
gotoxy(60,22);printf(" 12, 2N\n");
gotoxy(21,24);system("pause");
textbackground(BLACK);
system("cls");

int a,b;
body:
system("cls");
system("color 0f");
main2();
textbackground(WHITE);
gotoxy( 33,4);textcolor(LIGHTRED);printf("Trabalho Final");
gotoxy( 12,5);textcolor(LIGHTBLUE);printf("---------------------------------------------------------");
gotoxy( 12,6);textcolor(LIGHTBLUE);printf("                                                  0-Sair ");
gotoxy( 28,7);textcolor(LIGHTRED);printf("  1)");textcolor(BLACK);printf("Página inicial");
gotoxy( 28,9);textcolor(LIGHTRED);printf("    2)");textcolor(BLACK);printf("Trabalho");
gotoxy( 28,11);textcolor(LIGHTRED);printf("    3)");textcolor(BLACK);printf("Webgrafia");
gotoxy( 28,13);textcolor(LIGHTRED);printf("     4)");textcolor(BLACK);printf("Sobra");
gotoxy( 25,16);textcolor(LIGHTRED);printf("     Escolha a opção : ");scanf("%d",&b);

switch(b){
case 1:system("START https:///artbysujan.github.io/WebProjectWork/index.html");system("cls");goto body;break;
case 2:system("START https://artbysujan.github.io/WebProjectWork/Pages/trabalho.html");system("cls");goto body;break;
case 3:system("START https://artbysujan.github.io/WebProjectWork/Pages/webgrafia.html");system("cls");goto body;break;
case 4:system("START https://artbysujan.github.io/WebProjectWork/Pages/sobre.html");system("cls");goto body;break;	
case 0:
system("color 01");
system("cls");
main2();
textbackground(WHITE);textcolor(BLACK);
gotoxy(19,4);printf("  ____  _          _                 _       \n");
gotoxy(19,5);printf(" | __ || |        (_)               | |      \n");
gotoxy(19,6);printf("| |  | | |__  _ __ _  __ _  __ _  __| | ___  \n");
gotoxy(19,7);printf("| |  | | '_ || '__| || _` || _` || _` || _ | \n");
gotoxy(19,8);printf("| |__| | |_) | |  | | (_| | (_| | (_| | (_) |\n");
gotoxy(19,9);printf(" |____||_.__||_|  |_||__, ||__,_||__,_||___| \n");
gotoxy(19,10);printf("                      __| |                  \n");
gotoxy(19,11);printf("                     |___|                  \n");
gotoxy(20,13);printf("             Para a sua atenção \n");
textcolor(LIGHTRED);
gotoxy(15,14);printf("*\n");
gotoxy(21,15);printf("*\n");
gotoxy(25,16);printf("*\n");
gotoxy(29,17);printf("*\n");
gotoxy(34,18);printf("*\n");
gotoxy(38,19);printf("*\n");
gotoxy(43,20);printf("*\n");
gotoxy(44,20);printf("*\n");
gotoxy(49,19);printf("*\n");
gotoxy(53,18);printf("*\n");
gotoxy(59,17);printf("*\n");
gotoxy(63,16);printf("*\n");
gotoxy(68,15);printf("*\n");
textcolor(BLACK);
gotoxy(20,24);system("pause");
system("cls");
system("pause");
break;

default : system("cls");main2();
system("color 0f");
gotoxy( 38,4);textcolor(LIGHTRED);printf("ERROR");
gotoxy( 38,9);textcolor(LIGHTRED);printf("ERROR");
gotoxy( 38,11);textcolor(LIGHTRED);printf("ERROR");
gotoxy( 38,13);textcolor(LIGHTRED);printf("ERROR");
gotoxy( 26,16);system("pause");goto body;
} }

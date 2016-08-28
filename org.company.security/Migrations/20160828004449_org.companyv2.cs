using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace org.company.security.Migrations
{
    public partial class orgcompanyv2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                schema: "security",
                table: "User",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                schema: "security",
                table: "User",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                schema: "security",
                table: "User");

            migrationBuilder.DropColumn(
                name: "LastName",
                schema: "security",
                table: "User");
        }
    }
}

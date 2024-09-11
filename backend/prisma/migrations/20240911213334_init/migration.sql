-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('USER', 'STARTUP', 'INNOVATOR', 'IPR_PROFESSIONAL', 'RESEARCHER', 'INVESTOR', 'POLICYMAKER', 'MODERATOR', 'ADMIN', 'FOUNDER', 'EMPLOYEE');

-- CreateEnum
CREATE TYPE "PatentStatus" AS ENUM ('FILED', 'PENDING', 'GRANTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ClientType" AS ENUM ('STARTUP', 'INNOVATOR', 'RESEARCHER');

-- CreateEnum
CREATE TYPE "CaseType" AS ENUM ('PATENT', 'TRADEMARK', 'COPYRIGHT', 'DISPUTE');

-- CreateEnum
CREATE TYPE "InvestorType" AS ENUM ('ANGEL', 'VENTURE_CAPITAL', 'PRIVATE_EQUITY', 'CORPORATE');

-- CreateEnum
CREATE TYPE "ExitType" AS ENUM ('ACQUISITION', 'IPO');

-- CreateEnum
CREATE TYPE "InvestmentStage" AS ENUM ('SEED', 'SERIES_A', 'SERIES_B', 'SERIES_C', 'GROWTH');

-- CreateTable
CREATE TABLE "Moderator" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "controlUserTypes" "UserType"[] DEFAULT ARRAY[]::"UserType"[],

    CONSTRAINT "Moderator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" "UserType" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Startup" (
    "id" SERIAL NOT NULL,
    "dpiit_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "foundingDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "researchId" INTEGER,

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Founder" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "startupId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Founder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funding" (
    "id" SERIAL NOT NULL,
    "round" INTEGER NOT NULL,
    "investor" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "valuation" DOUBLE PRECISION NOT NULL,
    "startupId" INTEGER NOT NULL,

    CONSTRAINT "Funding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Milestone" (
    "id" SERIAL NOT NULL,
    "achievement" TEXT NOT NULL,
    "productLaunch" TIMESTAMP(3) NOT NULL,
    "partnership" TEXT NOT NULL,
    "startupId" INTEGER NOT NULL,

    CONSTRAINT "Milestone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "skills" TEXT[],
    "experience" INTEGER NOT NULL,
    "startupId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Innovator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "skills" TEXT[],
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Innovator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Innovation" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "developmentStage" TEXT NOT NULL,
    "innovatorId" INTEGER NOT NULL,

    CONSTRAINT "Innovation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patent" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "inventors" TEXT[],
    "filingDate" TIMESTAMP(3) NOT NULL,
    "status" "PatentStatus" NOT NULL,
    "innovatorId" INTEGER,
    "startupId" INTEGER,
    "researchId" INTEGER,

    CONSTRAINT "Patent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collaboration" (
    "id" SERIAL NOT NULL,
    "project" TEXT NOT NULL,
    "partner" TEXT NOT NULL,
    "innovatorId" INTEGER NOT NULL,

    CONSTRAINT "Collaboration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupportService" (
    "id" SERIAL NOT NULL,
    "service" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "innovatorId" INTEGER NOT NULL,

    CONSTRAINT "SupportService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IPRProfessional" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "expertise" TEXT[],
    "firm" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "qualifications" TEXT[],
    "certifications" TEXT[],
    "memberships" TEXT[],
    "userId" INTEGER NOT NULL,

    CONSTRAINT "IPRProfessional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ClientType" NOT NULL,
    "iprProfessionalId" INTEGER NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "id" SERIAL NOT NULL,
    "type" "CaseType" NOT NULL,
    "description" TEXT NOT NULL,
    "outcome" TEXT NOT NULL,
    "iprProfessionalId" INTEGER NOT NULL,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Researcher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "affiliation" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "expertise" TEXT[],
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Researcher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Research" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "funding" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,
    "researcherId" INTEGER NOT NULL,

    CONSTRAINT "Research_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publication" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authors" TEXT[],
    "journal" TEXT NOT NULL,
    "citations" INTEGER NOT NULL,
    "researcherId" INTEGER NOT NULL,

    CONSTRAINT "Publication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "InvestorType" NOT NULL,
    "industry" TEXT[],
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Investor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investment" (
    "id" SERIAL NOT NULL,
    "startupId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "ownership" DOUBLE PRECISION NOT NULL,
    "investorId" INTEGER NOT NULL,

    CONSTRAINT "Investment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exit" (
    "id" SERIAL NOT NULL,
    "type" "ExitType" NOT NULL,
    "startupId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "investorId" INTEGER NOT NULL,

    CONSTRAINT "Exit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestorPreference" (
    "id" SERIAL NOT NULL,
    "criteria" TEXT NOT NULL,
    "stage" "InvestmentStage" NOT NULL,
    "sector" TEXT NOT NULL,
    "investorId" INTEGER NOT NULL,

    CONSTRAINT "InvestorPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestorNetwork" (
    "id" SERIAL NOT NULL,
    "contact" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,
    "investorId" INTEGER NOT NULL,

    CONSTRAINT "InvestorNetwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Policymaker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Policymaker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CollaborationToResearcher" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Moderator_userId_key" ON "Moderator"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userId_key" ON "Admin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_dpiit_id_key" ON "Startup"("dpiit_id");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_userId_key" ON "Startup"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Founder_userId_key" ON "Founder"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_userId_key" ON "Employee"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Innovator_userId_key" ON "Innovator"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "IPRProfessional_userId_key" ON "IPRProfessional"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Researcher_userId_key" ON "Researcher"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Investor_userId_key" ON "Investor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Policymaker_userId_key" ON "Policymaker"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_CollaborationToResearcher_AB_unique" ON "_CollaborationToResearcher"("A", "B");

-- CreateIndex
CREATE INDEX "_CollaborationToResearcher_B_index" ON "_CollaborationToResearcher"("B");

-- AddForeignKey
ALTER TABLE "Moderator" ADD CONSTRAINT "Moderator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_researchId_fkey" FOREIGN KEY ("researchId") REFERENCES "Research"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Founder" ADD CONSTRAINT "Founder_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Founder" ADD CONSTRAINT "Founder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funding" ADD CONSTRAINT "Funding_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Milestone" ADD CONSTRAINT "Milestone_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Innovator" ADD CONSTRAINT "Innovator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Innovation" ADD CONSTRAINT "Innovation_innovatorId_fkey" FOREIGN KEY ("innovatorId") REFERENCES "Innovator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patent" ADD CONSTRAINT "Patent_innovatorId_fkey" FOREIGN KEY ("innovatorId") REFERENCES "Innovator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patent" ADD CONSTRAINT "Patent_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patent" ADD CONSTRAINT "Patent_researchId_fkey" FOREIGN KEY ("researchId") REFERENCES "Research"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaboration" ADD CONSTRAINT "Collaboration_innovatorId_fkey" FOREIGN KEY ("innovatorId") REFERENCES "Innovator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportService" ADD CONSTRAINT "SupportService_innovatorId_fkey" FOREIGN KEY ("innovatorId") REFERENCES "Innovator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IPRProfessional" ADD CONSTRAINT "IPRProfessional_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_iprProfessionalId_fkey" FOREIGN KEY ("iprProfessionalId") REFERENCES "IPRProfessional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_iprProfessionalId_fkey" FOREIGN KEY ("iprProfessionalId") REFERENCES "IPRProfessional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Researcher" ADD CONSTRAINT "Researcher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Research" ADD CONSTRAINT "Research_researcherId_fkey" FOREIGN KEY ("researcherId") REFERENCES "Researcher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_researcherId_fkey" FOREIGN KEY ("researcherId") REFERENCES "Researcher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investor" ADD CONSTRAINT "Investor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exit" ADD CONSTRAINT "Exit_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exit" ADD CONSTRAINT "Exit_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestorPreference" ADD CONSTRAINT "InvestorPreference_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestorNetwork" ADD CONSTRAINT "InvestorNetwork_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Policymaker" ADD CONSTRAINT "Policymaker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollaborationToResearcher" ADD CONSTRAINT "_CollaborationToResearcher_A_fkey" FOREIGN KEY ("A") REFERENCES "Collaboration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollaborationToResearcher" ADD CONSTRAINT "_CollaborationToResearcher_B_fkey" FOREIGN KEY ("B") REFERENCES "Researcher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

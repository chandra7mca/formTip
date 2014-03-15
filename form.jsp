
<jsp:include page="loginHeader.jsp"></jsp:include>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="bean" uri="http://jakarta.apache.org/struts/tags-bean"%>
<%@ taglib prefix="html" uri="http://jakarta.apache.org/struts/tags-html" %>

<%@taglib uri="http://displaytag.sf.net" prefix="display"%>

	<div id="pageCenterBlock">
			<div class="twoColumnLayout">
				<div class="bigLeftColumn">
						<div id="leftGreyRibbon">
							<span class="leftRibbonText">
								<bean:message key="loginForm.formTitle" bundle="login"/>
							</span>
						</div>
				</div>
			</div>
			
			<div class="formBlock">
				<html:form action="userlogin.do" method="POST" acceptCharset="UTF-8" styleId="loginForm">
				<div class="fieldSection">
					<label for="userId">  User Name </label>
					<div class="field">		
						<html:text property="userId"  styleId="userId" titleKey="loginForm.userId"  bundle="login" styleClass="inputField autoFocus required alphaNumeric minLength3 maxLength10"/>
						<span class="fieldIcon"><img src="<%=request.getContextPath()%>/images/info.png" width="24px" height="24px" /></span>
						<html:errors property="userId"/>
					</div>
				</div>
				
				<div class="fieldSection">
					<label for="password">
						<bean:message key="loginForm.passwordLabel"  bundle="login"/>
					</label>
					
					<div class="field">
						<html:password property="password" styleId="password" titleKey="loginForm.password" bundle="login" styleClass="inputField required specifiedChars minLength3 maxLength20"/>
						<span class="fieldIcon"><img src="<%=request.getContextPath()%>/images/info.png" width="24px" height="24px" /></span>
						<html:errors property="password"/>
					</div>
				</div>
				
				<div class="buttonSection">
					<html:submit property="" titleKey="loginForm.submitButton"  bundle="login" styleClass="formButton" styleId="loginButton">
						<bean:message key="loginForm.submitButtonText"  bundle="login" />
					</html:submit>
					
					<html:reset property="" titleKey="loginForm.resetButton"  bundle="login" styleClass="formButton">
						<bean:message key="loginForm.resetButtonText"  bundle="login"/>
					</html:reset>					
				</div>
				
				</html:form>
			</div>
	</div>
			
<jsp:include page="loginFooter.jsp"></jsp:include>